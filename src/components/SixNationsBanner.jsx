import React, { useState, useEffect, useRef } from 'react';

const MATCHES = [
  { date: '2026-02-07T14:10:00Z', home: 'ITA', away: 'SCO', homeFlag: '🇮🇹', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
  { date: '2026-02-07T16:40:00Z', home: 'ENG', away: 'WAL', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayFlag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
  { date: '2026-02-14T14:10:00Z', home: 'IRE', away: 'ITA', homeFlag: '🇮🇪', awayFlag: '🇮🇹' },
  { date: '2026-02-14T16:40:00Z', home: 'SCO', away: 'ENG', homeFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { date: '2026-02-15T15:10:00Z', home: 'WAL', away: 'FRA', homeFlag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', awayFlag: '🇫🇷' },
  { date: '2026-02-21T14:10:00Z', home: 'ENG', away: 'IRE', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayFlag: '🇮🇪' },
  { date: '2026-02-21T16:40:00Z', home: 'WAL', away: 'SCO', homeFlag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
  { date: '2026-02-22T15:10:00Z', home: 'FRA', away: 'ITA', homeFlag: '🇫🇷', awayFlag: '🇮🇹' },
  { date: '2026-03-06T20:10:00Z', home: 'IRE', away: 'WAL', homeFlag: '🇮🇪', awayFlag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
  { date: '2026-03-07T14:10:00Z', home: 'SCO', away: 'FRA', homeFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayFlag: '🇫🇷' },
  { date: '2026-03-07T16:40:00Z', home: 'ITA', away: 'ENG', homeFlag: '🇮🇹', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { date: '2026-03-14T14:10:00Z', home: 'IRE', away: 'SCO', homeFlag: '🇮🇪', awayFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
  { date: '2026-03-14T16:40:00Z', home: 'WAL', away: 'ITA', homeFlag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', awayFlag: '🇮🇹' },
  { date: '2026-03-14T20:10:00Z', home: 'FRA', away: 'ENG', homeFlag: '🇫🇷', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
];

const getOrdinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

const isToday = (date) => {
  const now = new Date();
  return (
    date.getUTCFullYear() === now.getUTCFullYear() &&
    date.getUTCMonth() === now.getUTCMonth() &&
    date.getUTCDate() === now.getUTCDate()
  );
};

const SixNationsBanner = () => {
  const bannerRef = useRef(null);
  const [currentMatch, setCurrentMatch] = useState(() => {
    const now = new Date();
    return MATCHES.find(match => {
      const kickoff = new Date(match.date);
      const matchEnd = new Date(kickoff.getTime() + 2 * 60 * 60 * 1000);
      return matchEnd > now;
    }) || null;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const next = MATCHES.find(match => {
        const kickoff = new Date(match.date);
        const matchEnd = new Date(kickoff.getTime() + 2 * 60 * 60 * 1000);
        return matchEnd > now;
      });
      setCurrentMatch(next || null);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (bannerRef.current) {
        const height = bannerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--banner-height', `${height}px`);
      } else {
        document.documentElement.style.setProperty('--banner-height', '0px');
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
      document.documentElement.style.setProperty('--banner-height', '0px');
    };
  }, [currentMatch]);

  if (!currentMatch) return null;

  const kickoff = new Date(currentMatch.date);
  const fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayName = fullDays[kickoff.getUTCDay()];
  const dayNum = getOrdinal(kickoff.getUTCDate());
  const monthName = fullMonths[kickoff.getUTCMonth()];
  const rawHours = kickoff.getUTCHours();
  const mins = String(kickoff.getUTCMinutes()).padStart(2, '0');
  const period = rawHours >= 12 ? 'pm' : 'am';
  const displayHours = rawHours % 12 || 12;
  const timeStr = `${displayHours}:${mins}${period}`;
  const dateStr = isToday(kickoff)
    ? `Today at ${timeStr}!`
    : `${dayName} ${dayNum} ${monthName} at ${timeStr}`;

  return (
    <div
      ref={bannerRef}
      className="fixed top-0 left-0 right-0 z-[60] w-full overflow-hidden"
      style={{ height: '38px' }}
    >
      {/* Stadium background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1624880357913-a8539048e534?w=1920&q=80&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Dark overlay with green tint */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(10,40,28,0.92) 0%, rgba(20,60,40,0.88) 50%, rgba(10,40,28,0.92) 100%)',
        }}
      />

      {/* Subtle top light streak */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 10%, rgba(180,220,180,0.25) 50%, transparent 90%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 h-full flex items-center justify-center px-3 md:px-6"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
          textShadow: '0 1px 3px rgba(0,0,0,0.4)',
        }}
      >
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1 text-white text-sm lg:text-[15px]">
          <span style={{ opacity: 0.7, fontWeight: 400, letterSpacing: '0.02em' }}>Showing all Six Nations games</span>
          <span className="mx-2" style={{ opacity: 0.3 }}>|</span>
          <span className="uppercase tracking-wider" style={{ fontWeight: 600 }}>Next up:</span>
          <span className="ml-1">{currentMatch.homeFlag}</span>
          <span className="uppercase tracking-wider" style={{ fontWeight: 700 }}>{currentMatch.home}</span>
          <span className="mx-1 uppercase" style={{ opacity: 0.5, fontWeight: 400, fontSize: '0.85em' }}>v</span>
          <span className="uppercase tracking-wider" style={{ fontWeight: 700 }}>{currentMatch.away}</span>
          <span className="mr-1">{currentMatch.awayFlag}</span>
          <span style={{ opacity: 0.4 }}>—</span>
          <span className="ml-1" style={{ opacity: 0.85, fontWeight: 500 }}>{dateStr}</span>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-1 text-white text-xs">
          <span className="uppercase tracking-wider" style={{ fontWeight: 600 }}>Next up:</span>
          <span className="ml-0.5">{currentMatch.homeFlag}</span>
          <span className="uppercase tracking-wider" style={{ fontWeight: 700 }}>{currentMatch.home}</span>
          <span className="mx-0.5 uppercase" style={{ opacity: 0.5, fontWeight: 400, fontSize: '0.85em' }}>v</span>
          <span className="uppercase tracking-wider" style={{ fontWeight: 700 }}>{currentMatch.away}</span>
          <span className="mr-0.5">{currentMatch.awayFlag}</span>
          <span style={{ opacity: 0.4 }}>—</span>
          <span className="ml-0.5" style={{ opacity: 0.85, fontWeight: 500 }}>{dateStr}</span>
        </div>
      </div>

      {/* Bottom edge line */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 5%, rgba(100,180,120,0.3) 50%, transparent 95%)',
        }}
      />
    </div>
  );
};

export default SixNationsBanner;

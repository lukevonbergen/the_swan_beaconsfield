import { useEffect, useState } from 'react';
import { supabase } from './supabase';

const venueId = process.env.REACT_APP_VENUE_ID;

let cached = null;

export function useVenue() {
  const [venue, setVenue] = useState(cached);
  const [loading, setLoading] = useState(!cached);

  useEffect(() => {
    if (cached) return;
    const fetch = async () => {
      const { data } = await supabase
        .from('venues')
        .select('name, phone, contact_email, address_line_1, address_line_2, city, postcode')
        .eq('id', venueId)
        .single();
      if (data) {
        cached = data;
        setVenue(data);
      }
      setLoading(false);
    };
    fetch();
  }, []);

  return { venue, loading };
}

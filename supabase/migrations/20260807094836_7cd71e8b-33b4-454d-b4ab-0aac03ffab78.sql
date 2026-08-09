CREATE TABLE public.reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  reservation_date date NOT NULL,
  reservation_time text NOT NULL,
  guests integer NOT NULL,
  occasion text,
  special_request text,
  status text NOT NULL DEFAULT 'Pending',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.reservations TO anon, authenticated;
GRANT ALL ON public.reservations TO service_role;
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a reservation enquiry" ON public.reservations FOR INSERT TO anon, authenticated WITH CHECK (
  char_length(name) BETWEEN 2 AND 100
  AND char_length(phone) BETWEEN 6 AND 20
  AND guests BETWEEN 1 AND 200
  AND status = 'Pending'
);

CREATE TABLE public.feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  contact text,
  visit_date date,
  feedback_type text NOT NULL DEFAULT 'General Feedback',
  rating_overall integer NOT NULL,
  rating_food integer,
  rating_service integer,
  rating_cleanliness integer,
  rating_ambience integer,
  rating_value integer,
  favourite_dish text,
  enjoyed_most text,
  comments text,
  would_recommend boolean,
  contact_requested boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'New',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.feedback TO anon, authenticated;
GRANT ALL ON public.feedback TO service_role;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit feedback" ON public.feedback FOR INSERT TO anon, authenticated WITH CHECK (
  char_length(name) BETWEEN 2 AND 100
  AND rating_overall BETWEEN 1 AND 5
  AND status = 'New'
);

CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  subject text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'New',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can send a contact message" ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (
  char_length(name) BETWEEN 2 AND 100
  AND char_length(message) BETWEEN 5 AND 2000
  AND status = 'New'
);

CREATE TABLE public.event_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  event_type text NOT NULL,
  event_date date,
  guests integer,
  message text,
  status text NOT NULL DEFAULT 'New',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.event_enquiries TO anon, authenticated;
GRANT ALL ON public.event_enquiries TO service_role;
ALTER TABLE public.event_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an event enquiry" ON public.event_enquiries FOR INSERT TO anon, authenticated WITH CHECK (
  char_length(name) BETWEEN 2 AND 100
  AND char_length(phone) BETWEEN 6 AND 20
  AND status = 'New'
);
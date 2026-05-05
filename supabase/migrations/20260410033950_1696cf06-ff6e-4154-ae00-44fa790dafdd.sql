-- Enable RLS on News table
ALTER TABLE public."News" ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read published articles
CREATE POLICY "Anyone can view published news"
ON public."News"
FOR SELECT
USING (status = 'published');

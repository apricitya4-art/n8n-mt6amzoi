-- شغّله مرة واحدة في Supabase → SQL Editor
create table if not exists site_content(id int primary key, data jsonb not null, updated_at timestamptz default now());
create table if not exists submissions(id bigint generated always as identity primary key, type text, data jsonb, created_at timestamptz default now());
alter table site_content enable row level security;
alter table submissions enable row level security;
create policy "public read" on site_content for select using (true);
create policy "admin write" on site_content for all to authenticated using (true) with check (true);
create policy "anyone sends" on submissions for insert to anon, authenticated with check (true);
create policy "admin inbox" on submissions for all to authenticated using (true) with check (true);
insert into storage.buckets(id,name,public) values('images','images',true) on conflict do nothing;
create policy "img read" on storage.objects for select using (bucket_id='images');
create policy "img write" on storage.objects for all to authenticated using (bucket_id='images') with check (bucket_id='images');

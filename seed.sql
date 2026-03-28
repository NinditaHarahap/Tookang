create schema if not exists seed;

create or replace function seed.bootstrap(
  user_account_id uuid,
  solo_account_id uuid,
  mandor_account_id uuid
) returns void
language plpgsql
as $$
declare
  solo_profile_id uuid := gen_random_uuid();
  agency_id uuid := gen_random_uuid();
begin
  if not exists (select 1 from auth.users where id = user_account_id) then
    raise exception 'auth user not found: %', user_account_id;
  end if;

  if not exists (select 1 from auth.users where id = solo_account_id) then
    raise exception 'auth user not found: %', solo_account_id;
  end if;

  if not exists (select 1 from auth.users where id = mandor_account_id) then
    raise exception 'auth user not found: %', mandor_account_id;
  end if;

  insert into public.users (id, role, account_type, name, language_preference)
  values (user_account_id, 'user', null, 'Seed User', 'id')
  on conflict (id) do nothing;

  insert into public.users (id, role, account_type, name, language_preference)
  values (solo_account_id, 'tukang', 'solo', 'Seed Solo', 'id')
  on conflict (id) do nothing;

  insert into public.users (id, role, account_type, name, language_preference)
  values (mandor_account_id, 'tukang', 'mandor', 'Seed Mandor', 'id')
  on conflict (id) do nothing;

  insert into public.tukang_profiles (
    id,
    user_id,
    service_area,
    categories,
    availability_status
  )
  values (
    solo_profile_id,
    solo_account_id,
    'Bali',
    array['plumbing'],
    'available'
  )
  on conflict (user_id) do nothing;

  insert into public.agencies (
    id,
    mandor_id,
    agency_name,
    service_area,
    trade_categories,
    crew_availability_status
  )
  values (
    agency_id,
    mandor_account_id,
    'Seed Crew',
    'Bali',
    array['plumbing','electrical'],
    'available'
  )
  on conflict do nothing;

  insert into public.agency_members (
    agency_id,
    tukang_id,
    trade_specialty,
    status
  )
  values (
    agency_id,
    solo_profile_id,
    'plumbing',
    'active'
  )
  on conflict do nothing;
end;
$$;

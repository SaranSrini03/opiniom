import supabase from '@/app/lib/supabaseClient';

interface Props {
  params: { username: string };
}

// async function because we’re fetching from Supabase
export default async function ProfilePage({ params }: Props) {
  // Remove '@' if present
  const username = params.username.startsWith('@')
    ? params.username.slice(1)
    : params.username;

  // Fetch profile by username
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .single();

  if (error || !profile) {
    return <div className="p-10 text-center">User not found 😢</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">@{profile.username}</h1>
      <p className="text-gray-500 mt-2">{profile.full_name}</p>
      <p className="mt-4">{profile.bio}</p>
      {profile.avatar_url && (
        <img
          src={profile.avatar_url}
          alt={profile.full_name}
          className="w-24 h-24 rounded-full mt-4"
        />
      )}
    </div>
  );
}

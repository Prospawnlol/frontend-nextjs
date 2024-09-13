import React from 'react';

interface Feature {
  name: string;
}

interface UserProfile {
  name: string;
  profileImage: string;
  features: Feature[];
}

const fetchUserProfile = async (): Promise<UserProfile> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch user profile: ${res.statusText}`);
    }
    const data = await res.json();
    
    return {
      name: data.name || 'Unknown',
      profileImage: data.profileImage || '',
      features: data.features || [], // Asegúrate de que 'features' sea un array, incluso si está vacío
    };
  } 
  catch (error) {
    console.error('Error fetching user profile:', error);
    // Maneja el error y proporciona valores predeterminados
    return { name: 'Unknown', profileImage: '', features: [] };
  }
};

const Home = async () => {
  const profile = await fetchUserProfile();
  console.log('Profile data:', profile);

  if (!profile || !Array.isArray(profile.features)) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center space-x-4">
        <img src={profile.profileImage} alt={profile.name} className="w-16 h-16 rounded-full" />
        <input type="text" className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"' />
        <h1 className="text-2xl font-bold ">{profile.name}</h1>
      </div>
      <ul className="mt-4">
        {profile.features.length > 0 ? (
          profile.features.map((feature, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded-md mb-2">
              {feature.name}
            </li>
          ))
        ) : (
          <li>No features available</li>
        )}
      </ul>
    </div>
  );
};

export default Home;

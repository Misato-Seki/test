import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

async function getTestData() {
    return directus.request(readItems('test'));
}

interface TestItem {
  id: string;
  name: string;
}

export default async function Home() {
  let data: TestItem[] = [];
  let errorMessage: string | null = null;

  try {
    const rawData = await getTestData();
    // Convert retrieved data to TestItem type
    data = rawData.map(item => ({
      id: item.id,
      name: item.name
    }));
  } catch (error) {
    console.error("Failed to fetch data:", error);
    errorMessage = "Failed to fetch data from Directus.";
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Directus Test</h1>
        <p className="text-lg">The following are retrieved from Directus.</p>
        
        {errorMessage ? (
          <p className="text-red-500 font-bold">{errorMessage}</p>
        ) : (
          data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <p className="text-2xl font-bold">{item.name}</p>
              </div>
            ))
          ) : (
            <p>No data.</p>
          )
        )}
        
      </main>
    </div>
  );
}
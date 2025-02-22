import Dexie from 'dexie';

    // Initialize Dexie database
    const db = new Dexie('AssetDatabase');
    db.version(1).stores({
      assets: '++id, name, description, image, ip, location, extractFields'
    });

    // Fetch all assets from the database
    export const fetchAssets = async () => {
      try {
        const assets = await db.assets.toArray();
        return assets;
      } catch (error) {
        console.error('Error fetching assets:', error);
        return [];
      }
    };

    // Fetch a single asset by its ID
    export const fetchAssetById = async (id) => {
      try {
        const asset = await db.assets.get(Number(id));
        return asset;
      } catch (error) {
        console.error(`Error fetching asset with id ${id}:`, error);
        return null;
      }
    };

    // Save a new asset record
    export const saveAsset = async (asset) => {
      try {
        const id = await db.assets.add(asset);
        return id;
      } catch (error) {
        console.error('Error saving asset:', error);
        throw error;
      }
    };

    // Update an existing asset record
    export const updateAsset = async (id, updatedAsset) => {
      try {
        const count = await db.assets.update(Number(id), updatedAsset);
        if (count === 0) {
          console.warn(`Asset with id ${id} not found for update.`);
        }
        return count;
      } catch (error) {
        console.error(`Error updating asset with id ${id}:`, error);
        throw error;
      }
    };

    // Delete an asset record
    export const deleteAsset = async (id) => {
      try {
        await db.assets.delete(Number(id));
      } catch (error) {
        console.error(`Error deleting asset with id ${id}:`, error);
        throw error;
      }
    };

    export default db;

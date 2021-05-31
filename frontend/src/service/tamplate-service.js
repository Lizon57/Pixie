import { httpService } from './http-service'

const STORAGE_KEY = 'tamplate'

export const tamplateService = {
    query,
    getById,
    save,
    remove,
}

async function query() {
    try {

        const tamplates = await httpService.get(`tamplate`);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tamplates));
        return tamplates;
    }
    catch (err) {
        console.log('cant find any tamplates', err)
        throw err
    }
}

async function getById(tamplateId) {
    try {
        return await httpService.get(`tamplate/${tamplateId}`, tamplateId);
    } catch (err) {
        console.log(`cant find tamplate by id ${tamplateId}`, err)
        throw err
    }
}


async function remove(tamplateId) {
    try {
        return await httpService.delete(`tamplate/${tamplateId}`);
    } catch (err) {
        console.log(`cant remove tamplate ${tamplateId}`, err)
        throw err
    }
}


async function save(tamplateInfo) {
    try {
        if (tamplateInfo._id) return await httpService.put(`tamplate`, tamplateInfo);
        return await httpService.post(`tamplate`, tamplateInfo);
    } catch (err) {
        console.log(`cant save tamplate`, err)
        throw err
    }
}





import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
});

export const superheroesAPI = {
    getSuperheroes(currentPage = 1) {
        return instance.get(`/superhero?page=${currentPage}`);
    },
    createSuperhero({nickname, real_name, origin_description, superpowers, catch_phrase, images}) {
        return instance.post(`/superhero`, {nickname, real_name, origin_description, superpowers, catch_phrase, images});
    },
    deleteSuperhero(id) {
        return instance.delete(`/superhero?id=${id}`);
    },
    updateSuperhero({nickname, real_name, origin_description, superpowers, catch_phrase, images, id}) {
        return instance.patch(`/superhero?id=${id}`, {nickname, real_name, origin_description, superpowers, catch_phrase, images});
    }
}

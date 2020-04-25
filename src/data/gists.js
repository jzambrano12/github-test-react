import superAgent from "superagent";
const BASE_URL = "https://api.github.com";
export default () => {
  return {
    getPublicGists: async (_key, page) => {
      try {
        const { body } = await superAgent.get(
          `${BASE_URL}/gists/public?page=${page}&per_page=20`
        );
        return body;
      } catch (error) {
        return { error };
      }
    },

    getAGist: async (_key, gist_id) => {
      try {
        const { body } = await superAgent.get(`${BASE_URL}/gists/${gist_id}`);
        return body;
      } catch (error) {
        return { error };
      }
    },

    getUserGists: async (_key, username) => {
      try {
        const { body } = await superAgent.get(
          `${BASE_URL}/users/${username}/gists`
        );
        return body;
      } catch (error) {
        return { error };
      }
    },
  };
};

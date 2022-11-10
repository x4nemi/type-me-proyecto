import { getProfiles } from "../../../helpers/getProfiles";
import { loadPeople, setPeople } from "./peopleSlice";

export const startLoadingPeople = () => {
    return async (dispatch, getState) => {
        dispatch(loadPeople());
        const people = await getProfiles();
        // dispatch(setPeople(people.filter((person) => person.uid !== uid)));
        dispatch(setPeople(people));
    };
};

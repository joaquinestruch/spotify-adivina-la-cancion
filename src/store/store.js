import create from "zustand";
import zukeeper from 'zukeeper';

export const useStore = create(zukeeper((set) => ({
    userData: {},
    changeUserData: (userDataNew) => set({ userData: userDataNew }),

    artistSelected: false,
    changeArtistSelected: (ArtistSelectedNew) => set({ artistSelected: ArtistSelectedNew }),

    loadingData: false, 
    changeLoadingData:  (newData) => set({ loadingData: newData }),

    allTracks: [], 
    changeAllTracks: (AllTracksNew) => set({ allTracks: AllTracksNew }),

    dataArtist: {}, 
    changeDataArtist: (newData) => set({ dataArtist: newData }),

})));

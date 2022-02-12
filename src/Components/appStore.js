import create from 'zustand'

export const useAppStore = create(set => ({
    duration: 60000,
    endTime: Date.now(), //Date in milliseconds from 1970
    startTime: Date.now() - 60000, 
    changeDuration: (value) => set(state => ({duration: value})),
    changeEndTime: (value) => set(state => ({endTime: value})),
    changeStartTime: (value) => set(state => ({startTime: value})),

}))



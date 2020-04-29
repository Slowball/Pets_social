let initialState = {
    friendsName: [
        {
            id: 1,
            name: 'SuperCat',
            url: 'https://www.nationalgeographic.com/content/dam/animals/2018/09/comedy-wildlife-awards-photos/comedy-wildlife-awards-squirel-stop.ngsversion.1537203605960.adapt.1900.1.jpg'
        },
        {
            id: 2,
            name: "Kolia",
            url: 'https://pbs.twimg.com/profile_images/1058201793753157633/SXcF2ilG_400x400.jpg'
        },
        {
            id: 3,
            name: "Misha",
            url: 'https://www.animaladdicts.net/wp-content/uploads/2016/08/Animal-world-is-by-far-the-funniest-world-Funny-animal-compilation-265x180.jpg'
        },
    ]
};

const friendsReducer = (state = initialState, action) => {
    return state;
};

export default friendsReducer;
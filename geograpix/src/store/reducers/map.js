const initialState = {
  pictureInfo: [
      {
          media_id: 22721881,
          user_id: 1,
          longitude: -118.3852043,
          latitude: 33.9650947,
          thumbnail: "https://i.ibb.co/qR7ST7G/image.png",
          standard_resolution: "https://i.ibb.co/mHbjfbs/image.png",
          created_time: 1279340983,
          caption: "this is a test",
          likes: 10,
        },
        {
          media_id: 22721882,
          user_id: 2,
          longitude: -118.3629714,
          latitude: 34.0058262,
          thumbnail: "https://i.ibb.co/qR7ST7G/image.png",
          standard_resolution: "https://i.ibb.co/mHbjfbs/image.png",
          created_time: 1279340983,
          caption: "this is a test",
          likes: 10,
        },
        {
          media_id: 22721883,
          user_id: 3,
          longitude: -108.413086,
          latitude: 41.625708,
          thumbnail: "https://i.ibb.co/qR7ST7G/image.png",
          standard_resolution: "https://i.ibb.co/mHbjfbs/image.png",
          created_time: 1279340983,
          caption: "this is a test",
          likes: 10,
        },
        {
          media_id: 22721884,
          user_id: 4,
          longitude:  -87.297363,
          latitude: 35.488629,
          thumbnail: "https://i.ibb.co/qR7ST7G/image.png",
          standard_resolution: "https://i.ibb.co/mHbjfbs/image.png",
          created_time: 1279340983,
          caption: "this is a test",
          likes: 10,
        },
        {
          media_id: 22721885,
          user_id: 3,
          longitude: -122.3962783813477,
          latitude: 37.778720183610183,
          thumbnail: "https://i.ibb.co/qR7ST7G/image.png",
          standard_resolution: "https://i.ibb.co/mHbjfbs/image.png",
          created_time: 1279340983,
          caption: "this is a test",
          likes: 10,
        },
        {
          media_id: 22721886,
          user_id: 3,
          longitude: -118.3497522,
          latitude: 34.02435,
          thumbnail: "https://i.ibb.co/qR7ST7G/image.png",
          standard_resolution: "https://i.ibb.co/mHbjfbs/image.png",
          created_time: 1279340983,
          caption: "this is a test",
          likes: 10,
        },
        {
          media_id: 22721887,
          user_id: 2,
          longitude: -119.487305,
          latitude: 35.086203,
          thumbnail: "https://i.ibb.co/qR7ST7G/image.png",
          standard_resolution: "https://i.ibb.co/mHbjfbs/image.png",
          created_time: 1279340983,
          caption: "this is a test",
          likes: 10,
        },
  ]
}

export const maps = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}
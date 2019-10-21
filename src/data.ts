import { Song } from 'constants/types'

export default [
  {
    artist: 'September 87',
    name: 'Bad Dream Baby',
    listens: 145202,
    song: 'BadDreamBaby',
    isLiked: true,
    cover: 'https://i.vimeocdn.com/video/526078435_1280x720.jpg',
    description: 'This song is by September 87 and features Dream Fiend.',
    tags: [
      {
        isImportant: true,
        value: 'New Synth Wave',
      },
      {
        isImportant: true,
        value: '🔥Popular',
      },
      {
        value: 'Electronic',
      },
      {
        value: 'Retro',
      },
      {
        value: 'Outrun',
      },
    ],
    comments: [
      {
        user: {
          name: 'John Wick',
          avatar:
            'https://cdnb.artstation.com/p/assets/images/images/013/127/649/large/michael-papatsounis-johnwickfinal.jpg?1538170551',
        },
        text: 'This song is worth killing for',
      },
      {
        user: {
          name: 'Vitas',
          isArtist: true,
          avatar: 'https://i.ytimg.com/vi/989-7xsRLR4/maxresdefault.jpg',
        },
        text: 'Thank you for your kind words!',
      },
      {
        user: {
          name: 'Obi Wan Kenobi',
          avatar:
            'http://images5.fanpop.com/image/photos/29200000/Obi-Wan-Kenobi-obi-wan-kenobi-29218268-1669-2560.jpg',
        },
        text:
          'This song has a high ground for sure! If you dont like it - then you are truly lost.',
      },
    ],
  },
  {
    name: 'Los Angeles',
    artist: 'The Midnight',
    listens: 34000,
    isLiked: true,
    cover:
      'https://scontent-prg1-1.xx.fbcdn.net/v/t1.0-9/44883276_2160020650889409_8949487783479607296_n.jpg?_nc_cat=107&_nc_oc=AQnVcG20lk3-m112Suw1y55PovPGTdDmScc_ENTqVQOBrZTl-giFBV71MEzLVvjl8rbazDD0qK55rK6859UkL4AI&_nc_ht=scontent-prg1-1.xx&oh=0e884e2a8643364267b2d42968551401&oe=5E255286',
    description: 'Placeholder',
    song: 'LosAngeles',
    tags: [
      {
        isImportant: true,
        value: 'New Synth Wave',
      },
      {
        isImportant: true,
        value: '🔥 Popular',
      },
      {
        value: 'Electronic',
      },
      {
        value: 'Retro',
      },
      {
        value: 'Outrun',
      },
    ],
  },
  {
    name: 'Running in the night',
    artist: 'FM-84',
    listens: 32000,
    isLiked: false,
    cover: 'https://i.redd.it/xvyfcvt7fvwz.jpg',
    description: 'This song is by September 87 and features Dream Fiend.',
    tags: [
      {
        isImportant: true,
        value: 'New Synth Wave',
      },
      {
        isImportant: true,
        value: '🔥 Popular',
      },
      {
        value: 'Electronic',
      },
      {
        value: 'Retro',
      },
      {
        value: 'Outrun',
      },
    ],
  },
  {
    name: 'Kickstart my heart',
    artist: 'Mötley Crüe',
    listens: 1030002,
    isLiked: true,
    cover: 'https://townsquare.media/site/295/files/2019/02/MCscr.jpg?w=980&q=75',
    description: 'This song is by September 87 and features Dream Fiend.',
    tags: [
      {
        value: 'Glam metal',
      },
      {
        isImportant: true,
        value: '🔥 Popular',
      },
      {
        value: 'Heavy metal',
      },
      {
        value: 'Hard Rock',
      },
    ],
  },
  {
    name: 'Dark side of the moon',
    artist: 'Pink Floyd',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/81aTawcGdmL._SL1500_.jpg',
    listens: 8398893,
    isLiked: false,
    description: 'Placeholder',
    tags: [
      {
        value: 'Progressive rock',
        isImportant: true,
      },
      {
        value: 'Rock',
      },
    ],
  },
  {
    name: 'Mind of a Beast',
    artist: 'The Glitch Mob',
    song: 'MindOfABeast',
    cover:
      'https://consequenceofsound.net/wp-content/uploads/2014/01/91vaxjhtjjl-_sl1500_.jpg?quality=80&w=807',
    listens: 490000,
    isLiked: true,
    description: 'Placeholder',
    tags: [
      {
        value: 'Glitch',
        isImportant: true,
      },
      {
        value: 'Electronic rock',
      },
      {
        value: 'Dubstep',
      },
      {
        value: 'EDM',
      },
    ],
  },
] as Song[]

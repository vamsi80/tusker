export const MediaAssets = {
    Images: {
        CustomerExperience: '/assets/home_cap/1.webp',
        CustomerExperienceAlt: '/assets/home_cap/1-1.webp',
        Branding: '/assets/home_cap/4.webp',
        FilmContent: '/assets/Services elephant/1.webp',
    },
    Videos: {
        HeroVideo: '/assets/videos/hero.mp4',
        Showreel: '/assets/videos/showreel.mp4',
    },
    Gifs: {
        Loader: '/assets/gifs/loader.gif',
    },
    Logos: {
        Main: '/assets/logos/logo-white.svg',
        Footer: '/assets/logos/logo-dark.svg',
    }
};

export const homeOffrings = {
    Customer_Experience_Center: {
      title: 'Customer Experience Center',
      description: 'We bring your space to life with immersive technology and interactive installations in our Experience Center.',
      images: [
        '/assets/projects/Experience/ADI/A40000.jpg',
        '/assets/projects/Experience Centers/BOSCH/110000.jpg',
        '/assets/projects/Experience/Johnnie Walker experience/30000.jpg'
      ]
    },
    Film_Content: {
      title: 'Film & Content',
      description: 'Focuses on creating high-quality visual storytelling through videos, advertisements, and multimedia content to enhance brand communication.',
      images: [
        '/assets/Services elephant/1.webp',
        '/assets/Services elephant/1.webp',
        '/assets/Services elephant/1.webp'
      ]
    },
    Immersive_Interactive: {
      title: 'Immersive & Interactive',
      description: 'Engages audiences with cutting-edge technologies like AR, VR, and interactive installations to deliver memorable and innovative experiences.',
      images: [
        '/assets/home_cap/3.webp',
        '/assets/home_cap/3.webp',
        '/assets/home_cap/3.webp'
      ]
    },
    Branding: {
      title: 'Branding',
      description: 'Builds a strong and consistent identity for businesses through logos, design, messaging, and strategic marketing to connect with the target audience.',
      images: [
        '/assets/home_cap/4.webp',
        '/assets/home_cap/4.webp',
        '/assets/home_cap/4.webp'
      ]
    },
    Corporate_Interior:{
      title: 'Corporate Interior',
      description: 'Specializes in crafting inspiring and functional spaces, blending aesthetics with practicality for residential, commercial, or retail environments.',
      images: [
        '/assets/home_cap/5.webp',
        '/assets/home_cap/5.webp',
        '/assets/home_cap/5.webp'
      ]
    },
    Commercial_Interior:{
      title: 'Commercial Interior',
      description: 'Comprehensive solutions for organizing impactful events and exhibitions, creating opportunities for networking, showcasing, and brand promotion.',
      images: [
        '/assets/home_cap/6.webp',
        '/assets/home_cap/6.webp',
        '/assets/home_cap/6.webp'
      ]
    }
}

export const ProjectMedia = {
    BOSCH: {
        category: 'customer',
        title: 'BOSCH',
        tag: 'Experience Center',
        image: '/assets/projects/Experience Centers/BOSCH/110000.jpg',
        images: [
            '70000.jpg',
            '110000.jpg',
            '120000.jpg',
            '130000.jpg',
            '240000.jpg',
            '250000.jpg',
            '260000.jpg',
            '280000.jpg',
        ].map(img => `/assets/projects/Experience Centers/BOSCH/${img}`)
    },
    ADI: {
        category: 'customer',
        image: '/assets/projects/Experience/ADI/A40000.jpg',
        title: 'ADI',
        tag: 'Experience Center',
        images: [
            'A100000.jpg',
            'A70000.jpg',
            'A100000.jpg',
            'A140000.jpg',
        ].map(img => `/assets/projects/Experience/ADI/${img}`)
    },
    JOHNNIE_WALKER: {
        category: 'customer',
        image: '/assets/projects/Experience/Johnnie Walker experience/30000.jpg',
        title: 'JOHNNIE WALKER EXPERIENCE',
        tag: 'Experience Center',
        images: [
            '10000.jpg',
            '50000.jpg',
            '70000.jpg',
            '90000.jpg',
            '140000.jpg',
        ].map(img => `/assets/projects/Experience/Johnnie Walker experience/${img}`)
    },
    ZEBRA_ROBOTICS: {
        category: 'interiors',
        image: '/assets/projects/BRANDING/Zebra Robotics/Interiors/Test1A.jpg',
        title: 'ZEBRA ROBOTICS',
        tag: 'Interiors',
        images: [
            'Test1B.jpg',
            'Test1C.jpg',
            'Test1D.jpg',
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
        ].map(img => `/assets/projects/BRANDING/Zebra Robotics/Interiors/${img}`)
    },
    VOLVO: {
        category: 'events',
        image: '/assets/projects/EVENTS/Volvo/1.jpg',
        title: 'VOLVO',
        tag: 'Events & Expos',
        images: [
            '3.jpg',
            '4.jpg',
            '12.jpg',
            '16.jpg',
            '22.jpg',
            '23.jpg',
            '24.jpg',
            '38.jpg',
            '40.jpg',
            '52.jpg',
            '58.jpg',
        ].map(img => `/assets/projects/EVENTS/Volvo/${img}`)
    },
    DECK: {
        category: 'events',
        image: '/assets/projects/EVENTS/Herbalife Virtual/FOR DECK/2B.jpg',
        title: 'FOR DECK',
        tag: 'Events & Expos',
        images: [
            '2.jpg',
            '2A.jpg',
            '2D.jpg',
            '2F.jpg',
            '2B.jpg',
            'HL_Render_V2_004.jpg',
            'HL_Render_V2_007.jpg',
            'HL_Render_V2_011.jpg',
        ].map(img => `/assets/projects/EVENTS/Herbalife Virtual/FOR DECK/${img}`)
    },
    EMIRATES: {
        category: 'events',
        image: '/assets/projects/Exhibition/Emirates/60000.jpg',
        title: 'EMIRATES',
        tag: 'Events & Expos',
        images: [
            '10000.jpg',
            '40000.jpg',
            '50000.jpg',
            '70000.jpg',
            '90000A.jpg',
            '100000A.jpg',
            '160000.jpg',
        ].map(img => `/assets/projects/Exhibition/Emirates/${img}`)
    },
    GOA_EMPORIUM: {
        category: 'events',
        image: '/assets/projects/Exhibition/Goa Emporium/G14.jpg',
        title: 'GOA EMPORIUM',
        tag: 'Events & Expos',
        images: [
            'G5.jpg',
            'G6.jpg',
            'G7.jpg',
            'G8.jpg',
        ].map(img => `/assets/projects/Exhibition/Goa Emporium/${img}`)
    },
    INDIA_PAVILION: {
        category: 'events',
        image: '/assets/projects/Exhibition/India Pavilion/7.jpg',
        title: 'INDIA PAVILION',
        tag: 'Events & Expos',
        images: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '6.jpg',
            '8.jpg',
        ].map(img => `/assets/projects/Exhibition/India Pavilion/${img}`)
    },
    INFOSYS_DAVOS: {
        category: 'events',
        image: '/assets/projects/Exhibition/Infosys @ DAVOS/Test9.jpg',
        title: 'INFOSYS @ DAVOS',
        tag: 'Events & Expos',
        images: [
            'Test2.jpg',
            'Test6.jpg',
            'Test10.jpg',
            'Test12A.jpg',
            'Test15.jpg',
            'Test17.jpg',
            'Test18.jpg',
        ],
    },
    INFOSYS_AUSTRALIA_OPEN: {
        category: 'events',
        image: '/assets/projects/Exhibition/Infosys Australia OPen/10000.jpg',
        title: 'INFOSYS AUSTRALIA OPEN',
        tag: 'Events & Expos',
        images: [
            '170000.jpg',
            '20000.jpg',
            '30000.jpg',
            '50000.jpg',
            '70000.jpg',
            '80000.jpg',
        ].map(img => `/assets/projects/Exhibition/Infosys Australia OPen/${img}`)
    },
    INFOSYS_CS_WEEK: {
        category: 'events',
        image: '/assets/projects/Exhibition/Infosys CS Week/T2.jpg',
        title: 'INFOSYS CS WEEK',
        tag: 'Events & Expos',
        images: [
            'T2A.jpg',
            'T2B.jpg',
            'T2C.jpg',
        ].map(img => `/assets/projects/Exhibition/Infosys CS Week/${img}`)
    },
    INFOSYS_HELIX: {
        category: 'events',
        image: '/assets/projects/Exhibition/Infosys Helix/Booth 130921/8.jpg',
        title: 'INFOSYS HELIX',
        tag: 'Events & Expos',
        images: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '6.jpg',
            '7.jpg',
            '9.jpg',
            '10.jpg',
        ].map(img => `/assets/projects/Exhibition/Infosys Helix/Booth 130921/${img}`)
    },
    INFOSYS_MONEY: {
        category: 'events',
        image: '/assets/projects/Exhibition/Infosys Money 2020/4.jpg',
        title: 'INFOSYS MONEY',
        tag: 'Events & Expos',
        images: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '5.jpg',
        ].map(img => `/assets/projects/Exhibition/Infosys Money 2020/${img}`)
    },
    KARNATAKA_TOURISM: {
        category: 'events',
        image: '/assets/projects/Exhibition/Karnataka Tourism 2/1.jpg',
        title: 'KARNATAKA TOURISM',
        tag: 'Events & Expos',
        images: [
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '6.jpg',
            '7.jpg',
            '8.jpg',
        ].map(img => `/assets/projects/Exhibition/Karnataka Tourism 2/${img}`)
    },
    KIAB: {
        category: 'events',
        image: '/assets/projects/Exhibition/KIAB/EX5.jpg',
        title: 'KIAB',
        tag: 'Events & Expos',
        images: [
            'EX1.jpg',
            'EX2.jpg',
            'EX3.jpg',
            'EX4.jpg',
        ].map(img => `/assets/projects/Exhibition/KIAB/${img}`)
    },
    ZOYA: {
        category: 'events',
        image: '/assets/projects/Exhibition/Zoya/2KS-C.jpg',
        title: 'ZOYA',
        tag: 'Events & Expos',
        images: [
            '50S-B.jpg',
            '50S-D0000.jpg',
            '80S-A.jpg',
            '80S-C.jpg',
            '80S-F.jpg',
        ].map(img => `/assets/projects/Exhibition/Zoya/${img}`)
    },
    LAMBORGHINI: {
        category: 'events',
        image:
            '/assets/projects/EVENTS/lamborghini/Lamborghini Blancpain Super Trofeo Design_001.jpg',
        title: 'LAMBORGHINI',
        tag: 'Events & Expos',
        images: [
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_002.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_003.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_004.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_005.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_006.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_007.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_008.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_009.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_010.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_011.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_012.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_013.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_014.jpg',
            'Lamborghini%20Blancpain%20Super%20Trofeo%20Design_015.jpg',
        ].map(img => `/assets/projects/EVENTS/lamborghini/${img}`)
    },
    SUNBURN: {
        category: 'events',
        image: '/assets/projects/EVENTS/Sunburn 2017/Sunburn1.png',
        title: 'SUNBURN',
        tag: 'Events & Expos',
        images: [
            'Sunburn2.png',
            'Sunburn3.png',
            'Sunburn4.png',
        ],
    },
};

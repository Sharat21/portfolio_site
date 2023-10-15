import sampleImg from './Assets/simon.png';
import phone from './Assets/phone.png';
import treemap from './Assets/Treemap.png';
import stopvirus from './Assets/stopVirus.png';

const data = [
    {
        id:1,
        image:stopvirus,
        title: "StopTheVirus: Arcade Game",
        category: "Hackathon", 
        description: "StopTheVirus is an engaging game inspired by the COVID-19 pandemic, offering players a dynamic experience involving physics and complex algorithms. Developed using Python and essential libraries like Pygame, Random, and Math, the game challenges players to shoot down falling viruses with a vaccine while avoiding infectors. Players control movement with the 'a' and 'd' keys and aim and shoot using the mouse. The project encountered challenges in calculating shooting angles and refining the user interface. The team is proud of their collaborative efforts and their ability to create an enjoyable and visually appealing game, enhancing their skills in both front-end and back-end programming, and utilizing various libraries for physics and game mechanics.",
        href: "https://github.com/Sharat21/StopTheVirus",
        demo: "https://www.youtube.com/watch?v=695k2fVwIlI&ab_channel=SharatKrishnan"
    },

    {
        id:2,
        image:"https://t3.ftcdn.net/jpg/05/58/90/40/360_F_558904050_0Pdr8120v9kb9bRlWqmBQ7XHSMUaThKo.jpg",
        title: "BattleShip",
        category: "Course", 
        description: "The Java-based Battleship project was created with a strong emphasis on accessibility. Developed collaboratively by a group of skilled developers, the project benefitted from a Git flow workspace environment that facilitated seamless cooperation and peer pull request reviews. The development process adhered to the principles of AGILE, ensuring that project features were completed on schedule. One standout aspect of the project was the implementation of the Player Feature, which was developed using the Command Design pattern and spanning both the front-end and back-end components of the MVC architecture. To efficiently address challenges and debug the issues, the Pair Programming approach was followed, with developer pairs collectively resolving issues for each game feature.",
        href: "https://github.com/sharatk19/TeamAlpha",
        demo: "https://youtu.be/Fla5FuZj_rA"
    },
    {
        id:3,
        image:"https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png",
        title: "Stocks4U",
        category: "Hackathon", 
        description: "Stocks4U is an innovative application designed to help individuals and small businesses capitalize on the post-pandemic economic recovery by making smart stock investments. Built using Python, the application leverages libraries such as pandas, Plotly, and numpy to retrieve stock data from Yahoo Finance and visualize it through customizable parameters. Users can select international stock indexes, time periods, and choose from six trendline options, including extrapolation for future trend insights. The project overcame data manipulation challenges and gained expertise in statistical programming.",
        href: "https://github.com/Sharat21/Stocks4U",
        demo: "https://www.youtube.com/watch?v=dHm_-2FKUSQ&ab_channel=SharatKrishnan"
    },
    {
        id:4,
        image:"https://assets.funnygames.org/4/184/52977/672x448/neave-tetris.webp",
        title: "Tetris",
        category: "Course", 
        description: "This Java-based Tetris implementation utilizes JavaFX to recreate the classic Tetris game with a unique twist. In addition to offering the traditional gameplay experience, this project introduces a handy feature: the ability to save and load game boards. This feature enables players to pause and resume their game progress, adding a modern touch to the beloved classic. Developed entirely in Java, the project seamlessly blends the nostalgia of the original Tetris with the convenience of saved game progress, providing an engaging gaming experience for all.",
        demo: "https://www.youtube.com/watch?v=qJpH4qpYbvY&ab_channel=SharatKrishnan"

    },

    {
        id:5,
        image:"https://blog.allaboutlearningpress.com/wp-content/uploads/2019/01/Boggle-Board-2-450x400.png",
        title: "Boggle",
        category: "Course", 
        description: "The Boggle project offers an immersive wordplay experience based on the classic Boggle game. Developed in Java, this project recreates the essence of Boggle, allowing users to choose between the traditional 5x5 grid and a 4x4 grid for a quick challenge. What sets this implementation apart is the option to play on a randomly generated grid or customize the grid with letters of their choice. Players can go head-to-head against a computer AI, competing to find as many words as possible. To make it even more engaging, the project enables users to play multiple rounds, creating an addictive word-hunting experience.",
        demo:"https://www.youtube.com/watch?v=wnHTf9qsNGM"

    },
    {
        id:6,
        image:"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/922/088/datas/gallery.jpg",
        title: "Pokémon Discord Bot",
        category: "Hackathon", 
        description: "The PokemonBot is a Discord bot that enables users to embark on Pokemon adventures, capturing creatures and engaging in battles within the Discord platform. Developed using Python with libraries like openpyxl, pokebase, and discord.py, the bot offers a fun and interactive experience for Discord users.",
        href: "https://github.com/Sharat21/PokemonBot",
        demo: "https://devpost.com/software/pokemon-discord-bot"

    },
    {
        id:7,
        image:sampleImg,
        title: "Simon Says",
        category: "Course", 
        description: "Simon is a memory game implemented in assembly language using Ripes-V. It's a single-player game where the objective is to remember and replicate sequences of LED patterns using a D-Pad. The game becomes more challenging with each round, as the pattern size increases and the time limit decreases. Players can run the game, input commands via the D-Pad, and aim for a high score by successfully completing longer patterns. The game is a test of memory and response time, all coded in assembly and run through Ripes-V.",
        demo: "https://docs.google.com/document/d/1xeuHN_yp3qwbV7PJn3NrFS9CleD3znvBB5Yqn7mk8_E/edit?usp=sharing",
        href: "contact"
    },
    {
        id:8,
        image:"https://miro.medium.com/v2/resize:fit:480/1*VDG9h4caXMwPKf0b23z9oQ.jpeg",
        title: "Huffman Compression",
        category: "Course", 
        description: "The project centers around the implementation of a file compression and decompression system, which utilizes the Huffman coding algorithm. It provides a practical platform for users to experiment with and apply data compression principles effectively. This system allows for the efficient reduction of file sizes while maintaining data integrity.During the compression process, the system analyzes the input data, creating a Huffman tree based on the frequency of symbols (bytes) within the file. This tree is then used to map symbols to variable-length codes, achieving optimal compression. On the other hand, during decompression, the system employs the Huffman tree to reverse the process and recover the original data. In conclusion, this project offers critical tools for data compression and decompression, highlighting their pivotal role in information storage and transmission.",
        demo: "https://www.youtube.com/watch?v=TFB_6N7lDqU&ab_channel=SharatKrishnan"
    },

    {
        id:9,
        image:phone,
        title: "Phone Management System",
        category: "Course", 
        description: "The Phone Management System project represents a sophisticated telecommunications solution designed for effective call management. This system is equipped with a wide range of filtering capabilities, allowing users to discern and categorize calls according to specific criteria, including phone plan classifications, phone number identification, and geographical locations within the Greater Toronto Area (GTA). Beyond call data processing, the project maintains detailed customer profiles and their corresponding call histories, facilitating a comprehensive and interactive approach to managing telecommunications activities in this specified region.",
        demo: "https://www.youtube.com/watch?v=RNUE1t-J7QQ&ab_channel=SharatKrishnan"
    },
    {
        id:10,
        image:"https://media.istockphoto.com/id/613540742/vector/abstract-city-map-illustration.jpg?s=612x612&w=0&k=20&c=L9f7LLS3q0VXxfIy3kNPm7gQQ5TfKQEbWpXKxeYgJx4=",
        title: "Taxi-Trip Sharing Simulation",
        category: "Course", 
        description: "Trip-Sharing Simulation is a Python project that immerses participants in the intricate world of ride-sharing systems. Utilizing real passenger data, it creates a dynamic virtual environment where passengers request trips, drivers respond, and various events unfold. This simulation optimizes passenger and driver pairing, considering factors such as proximity and wait times. It provides valuable hands-on experience in event-driven programming and object-oriented design, enriching coding skills and deepening understanding of complex systems.",
        demo: "https://www.youtube.com/watch?v=FC-47DHj_Rw&ab_channel=SharatKrishnan"
    },
    {
        id:11,
        image:treemap,
        title: "Treemap Visualizer",
        category: "Course", 
        description: "This project is a Python-based treemap visualizer designed to represent and interact with hierarchical data structures. It allows users to explore and visualize data organized in a tree-like manner, such as files and folders on a computer or categorized research papers. The project's core functionality is implemented using Python's object-oriented programming paradigm, with classes designed to represent various aspects of hierarchical data. The treemap visualization algorithm dynamically partitions a display area to reflect the proportional sizes of data nodes. Users can interact with the visualizer by expanding, collapsing, and modifying nodes, providing a versatile tool for exploring and manipulating hierarchical data in a graphical interface.",
        demo: "https://www.youtube.com/watch?v=eZ26Jgia8gc&ab_channel=SharatKrishnan"
    },
    {
        id:12,
        image:"https://learnopencv.com/wp-content/uploads/2020/10/snake-game-opencv-python.png",
        title: "Snake Game",
        category: "All", 
        description: "The Python Snake Game is a Python-based project developed using essential libraries like pygame, time, and random. This project involves creating a classic game where players control a snake to consume food, leading to the snake's gradual elongation, all while evading collisions with obstacles and its own body. Despite its seemingly straightforward concept, the game encompasses intricate logic for snake movement, collision detection, and dynamic food placement. This endeavor provided an opportunity to delve into game development, fostering an improved grasp of problem-solving techniques and a deeper understanding of fundamental game mechanics and user interaction.",
        href: "https://github.com/Sharat21/SmallProjects/tree/main/Snake%20Game",
        demo: "https://github.com/Sharat21/SmallProjects/tree/main/Snake%20Game"

    },
]

export default data;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhp, faReact, faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import Project from '../components/Project'
import azureImage from '../images/azure.png';
import Scout from '../images/scout.PNG';
export default function Home() {

    return (
        <div class="mx-20 my-10">
            <h1 class="text-green-500 text-4xl my-2">About</h1>
            <p>Computer Science Graduate with a creative mindset and a passion for Web Development. Acquired solid foundation in object-oriented programming with Java. Progressed into developing and integrating REST APIs using object-oriented PHP. Collaborative team player attuned to working in a fast-paced environment whilst providing excellent quality service. Described as ‘outstanding, friendly and attentive’ by customers. Independent and adaptive problem solver with a keen eye for detail and strong work ethic. Proactive and committed learner with an optimistic attitude. Confident decision maker and resilient self starter. </p>

            <div class="flex justify-center my-5 space-x-10">
            <img class="h-32" src={azureImage}/>
                <FontAwesomeIcon icon={faReact} size="7x" />
                <FontAwesomeIcon icon={faPhp} size="7x" />
                <FontAwesomeIcon icon={faHtml5} size="7x" />
            </div>
          
            <h2 class="text-green-500 text-3xl my-4">Projects</h2>
            {/* <h3 class="text-green-500 text-2xl mt-5">NU-Munchies - A Team Project</h3>
            <Link class="relative after:bg-white  after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer" to="https://www.nu-munchies.xyz" >Visit</Link>

            <p>
                Website for bakeries and fresh goods sellers to advertise excess stock at a discount before going to waste. RESTful API’s developed to perform operations on the database to retrieve, create, update and delete customer orders using object oriented PHP. Negotiated and delegated duties between a team of 5 fullstack developers by dividing the project into subsystems. Built using React, Tailwind, PHP and PostgreSQL.
            </p>
            <h3 class="text-green-500 text-2xl mt-5">Scout - Dissertation Project</h3>
            <p>
                A mobile app that recommends study and social locations to higher education students (cafes, restaurants, libraries). Critically analysed and reviewed quality literature regarding informal learning environments and student loneliness to inform requirements. Conducted a survey to receive feedback from local students. Developed a project plan while determining the best approach, comparing techniques (framework, research methods). Managed project using Gantt chart and measuring and maintaining project objectives throughout research. Developed using React Native on frontend, PHP on backend.
            </p> */}

            <Project img={Scout}title="Scout - Dissertation Project" text="A mobile app that recommends study and social locations to higher education students (cafes, restaurants, libraries). Critically analysed and reviewed quality literature regarding informal learning environments and student loneliness to inform requirements. Conducted a survey to receive feedback from local students. Developed a project plan while determining the best approach, comparing techniques (framework, research methods). Managed project using Gantt chart and measuring and maintaining project objectives throughout research. Developed using React Native on frontend, PHP on backend."/>
        </div>



    )
}
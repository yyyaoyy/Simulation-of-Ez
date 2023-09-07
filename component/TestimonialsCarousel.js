import React, { useState } from 'react';
import styles from '/css/ContentSwitcher.module.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  'adriana',
  'martin',
  'betty',
  'shahida',
  'madina',
  'david',
  'steve',
  'daniel',
  'sam',
  'anita',
  'peter',
  'shane',
  'mick',
  'william',
  'angelo',
  'lindsay',
  'simon',
  'filis',
  'rocco',
  'phil',
  'ben',
  'shaun',
  'john',
  'nick',
  'tim',
  'sam',
  'angelo1',
  'charlie',
  'peter1',
];

// Testimonial content
const testimonialContent = {
  adriana: {
    name: 'Adriana',
    text: 'Adriana is a really good instructor!She knows everything and she always make sure to correct every detail before the test.Apart from that, she is very sweet and calm. I was blessed to find her.Thanks Adriana!!!!',
    author: 'Livia',
  },
  martin: {
    name: 'Martin',
    text: 'Martin is a fantastic driving instructor! His attention to detail and calm approach assisted me greatly in obtaining my drivers licence. Martin is patient and gives easy to follow instructions, if I ever made a mistake he would explain to me exactly what I had done wrong, how it could potentially impact other road users, and how to fix it. I 100% would not have been able to obtain my drivers licence without Martin as my driving instructor. If you are looking for someone who is very knowledgeable, and will ensure that you have no bad driving habits come test day, look no further! Thanks again for all of your help Martin, I will really miss our lessons and chats - Shaye',
    author: 'Shaye',
  },
  betty: {
    name: 'Betty',
    text: 'Betty made me feel extremely comfortable on my first lesson. I started off quite nervous but that vanished quickly. Betty also provided a lot of helpful tips and information throughout the lesson and I feel a lot more confident after just 1 lesson. Definitely recommend. Thanks',
    author: 'Nicholas',
  },
  shahida: {
    name: 'Shahida',
    text: 'Shahida is an incredible driving instructor. I highly recommend her. My first driving experience with Shahida was absolutely great, I really enjoyed my first lesson. I was a nervous wreck before the lesson but within a couple of minutes with Shahida, her calm, gentle nature and professionalism, helped me overcome my anxiety with driving. I actually learnt so much within 2hrs with shahida. She teaches you basic techniques and helpful tips to improve your driving. I look forward to learning more from you Shahida. Thank you for your incredible patience and wealth of knowledge and wisdom.',
    author: 'Sepi',
  },
  madina: {
    name: 'Madina',
    text: 'Very patient and effective in her teaching. I pretty much regained must of my confidence on the road within 2 lessons after not having done any driving for more than 4 years.',
    author: 'Brian',
  },david: {
    name: 'David',
    text: 'Easy going and down to earth put me at ease straight away. I was after a 2hr refresher course to clear away some cobwebs before taking on some more advanced driving tests and David was great.',
    author: 'John',
  },steve: {
    name: 'Steve',
    text: 'Has very good knowledge of the road. Explains the reasons for his instructions and keeps you calm throughout the whole experience. Highly recommended.',
    author: 'Sam',
  },
  daniel: {
    name: 'Daniel',
    text: 'I had the best experience with Daniel! I went from complete driving phobia to driving multiple locations by myself for work within only one week! He is calm, relaxed and makes you have fun even if driving isn’t very fun for you. He genuinely cares so much about his students. Couldn’t recommend him more! Complete lifesaver! ',
    author: 'Zoe',
  },
  sam: {
    name: 'Sam',
    text: 'Passed on my first driving test with SAM as my driving instructor. He&#39;s excellent with teaching you everything to become a good road user. He&#39;s also calm, patient and makes you really comfortable. Highly recommended😊',
    author: 'Chris',
  },
  anita: {
    name: 'Anita',
    text: 'Anita is such an AMAZING instructor!! She is very patient and really observant. After only 3 lessons she prepared me for the test and passed on the first go. Thanks so much Anita!!',
    author: 'Jesse',
  },
  peter: {
    name: 'Peter',
    text: 'A nice change from previous instructor (different company). Peter was relaxed and patient, and the lesson was an enjoyable one. We will definitely book with Peter again.',
    author: 'Michael',
  },
  shane: {
    name: 'Shane',
    text: 'Driving with Shane was an awesome experience as he teaches you what you need to know and do and helped me develop on an area of driving that i felt i needed to work on.  Cheers Shane',
    author: 'Te reinga putua',
  },
  mick: {
    name: 'Mick',
    text: 'Mick is fantastic! He is very friendly and I was comfortable straight away. He helped me very much on achieving my Ps, he is the only instructor I had learnt from and I passed first go. I highly recommend Mick to everyone!',
    author: 'Isabella',
  },
  william: {
    name: 'William',
    text: 'William is an absolute legend! Help me get my licence after 5 lessons, where he took his time to explain things thoroughly and ensure I knew what I was doing. Gave me a great deal of confidence going into the test. He has a calming presence which helps in those tough moments. Thanks again, don&#39;t hesitate to book with him! ',
    author: 'Tom',
  },
  angelo: {
    name: 'Angelo',
    text: 'Angelo is an amazing instructor, patient, professional, funny. I&#39;d recommend him to anyone - any level of expertise. He prepares you for a driving test and also actually teaches you to drive!',
    author: 'Evelina',
  },
  lindsay: {
    name: 'Lindsay',
    text: 'I was very impressed with Lindsay.  Lovely personality and very calm and relaxed.My other driving school lessons were quite stressful.',
    author: 'Fiona',
  },
  simon: {
    name: 'Simon',
    text: 'Simon is a great instructor!I took a 2-hour lesson on a day prior to my driving test. Got a few valuable tips and much-needed practice, which helped me to pass the test on the first go and confirm my overseas licence.',
    author: 'Dmitry',
  },
  filis: {
    name: 'Filis',
    text: 'Filis is an absolute pleasure to learn to drive with. She is patient, constructive and always happy to assist me wherever I needed it. I honestly feel each lesson is a building block to greater self-confidence on the road. Every lesson is worthwhile. Highly recommended!!!',
    author: 'Alesia',
  },
  rocco: {
    name: 'Rocco',
    text: 'Thank you Rocco! Honest and well-deserved 5-stars. You made me feel comfortable so fast, your feedback is kind and valuable, you teach in a subtle and consistent way. Not to mention you are very professional, yet super friendly. You go above and beyond for your students. Big recommend to anyone.',
    author: 'Saskia',
  },
  phil: {
    name: 'Phil',
    text: 'My son had a few lessons with another company who didn’t explain things like Phil and he failed with the other company. Three lessons with Phil and he picked up all the knowledge to pass his PDA.I can’t thank Phil enough. My son felt so confident driving with Phil and gained the skills to carry him through to his every day driving now. I wish I had booked your company first. I will recommend Ezlicence to everyone and of course if you require a fantastic driving Instructor pick Phil. Money well spent. ',
    author: 'Jayden',
  },
  ben: {
    name: 'Ben',
    text: 'Ben is a great and instructor. He helped me to improve my driving; giving helpful advice when making judgements on the road and goes into deep depth of what actions to take in order to be a safe and great driver',
    author: 'Kallista',
  },
  shaun: {
    name: 'Shaun',
    text: 'Shaun was excellent at explaining not only the science behind driving a vehicle but the operation of his vehicle. He was very patient with me and gave me a lot of encouragement as the lesson progressed.',
    author: 'Olivia',
  },
  john: {
    name: 'John',
    text: 'John is a top class driving instructor, he was very informative about the need to know building blocks of driving a manual car breaking down the skills of adjusting seating,steering, turning corners, using the clutch and break, use of the mirrors, changing lanes, understanding blind spots, things to be aware of, was clear and very easy to understand, great at explaining, very patient, able to give constructive feed back , very calm and very easy to get along with. If your new to manual driving, he&#39;s your go to guy! :-)',
    author: 'Terry',
  },
  nick: {
    name: 'Nick',
    text: 'I cannot recommend Nick more highly. I am a nervous driver; to the point where it stops me from doing things and going to places that I enjoy. I am taking lessons with Nick to overcome this. Nick is calm, confident, informative and encouraging. He is an excellent teacher and an emotionally intelligent instructor. The Buddhists tell us that “when the student is ready, the teacher arrives”; I am so grateful that Nick is my driving instructor.',
    author: 'Anna',
  },
  tim: {
    name: 'Tim',
    text: 'Tim is a very calm and encouraging teacher. I really enjoy learning from him. I was really anxious about beginning lessons. I&#39;ve had my Ls for about 9 years and been too nervous to get lessons so I can be confident and take the test. Tim is very reassuring and kind.',
    author: 'Mara',
  },
  sam: {
    name: 'Sam',
    text: 'Excellent Instructor. I saw the biggest smile on my daughter&#39;s face when she returned from her lesson. Sam is calm, patient, understanding and very helpful! Especially that my daughter was fairly new to driving. She learnt so much in just 1 hour with Sam.Definitely continuing with Sam and highly recommend him.',
    author: 'Tanisha',
  },
  angelo1: {
    name: 'Angelo',
    text: 'Fantastic teacher!! I wish there was a way I could give Angelo 6* because this man deserves a gold medal for teaching someone like me. Anyone who knows me would know that I have an innate FEAR of driving. It has taken me many years to pluck up the courage to get behind the wheel and Angelo really helped me to conquer my fear in more ways than one. He has had to put up with me crying out of anxiety a few times too. If you want a teacher who makes you feel comfortable(And also someone that makes you laugh) behind the wheel (And I am a true testament to that), look no further!',
    author: 'Cherry',
  },
  charlie: {
    name: 'Charlie',
    text: 'One of the best driving instructors in Sydney. Charlie has a wealth of knowledge and has extraordinary people skills. At first, I was scared to even sit in the car. However, after 10 minutes with Charlie, my confidence grew, and I began loving driving. If you want to learn how to drive safely, efficiently and have a whole bunch of fun while doing it. Look no further, you have Charlie. ',
    author: 'Rhys',
  },
  peter1: {
    name: 'Peter',
    text: 'It&#39;s been fun learning how to drive with Pete.  He teaches you how to be a disciplined and safe driver - - passing the driving test is a given.',
    author: 'Dexter',
  },
};

function ContentSwitcher() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleContentChange = (index) => {
    setCurrentTestimonialIndex(index);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className={styles.container}>

      <h1 className={styles.title}><br/>What our learners say</h1>
      <span className={styles.title1}>Choose a driving instructor you can trust</span>

      <div className={styles.bodycontainer}>
      {testimonialContent[currentTestimonial] && (
        <div className={styles.body}>
          <strong className="block">{testimonialContent[currentTestimonial]?.name}</strong>
          <div class="star-container">
          <FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
</div>
          <p className={styles.text2} title={testimonialContent[currentTestimonial]?.text}>
            {testimonialContent[currentTestimonial]?.text}
          </p>
          <i className={styles.text1}>{testimonialContent[currentTestimonial]?.author}</i>
        </div>
)}
{testimonialContent[testimonials[currentTestimonialIndex + 1]] && (
        <div className={styles.body}>
          <strong className="block">{testimonialContent[testimonials[currentTestimonialIndex + 1]]?.name}</strong>
            <div class="star-container">
          <FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
</div>
<p className={styles.text2} title={testimonialContent[testimonials[currentTestimonialIndex + 1]]?.text}>
            {testimonialContent[testimonials[currentTestimonialIndex + 1]]?.text}
          </p>
          <i className={styles.text1}>{testimonialContent[testimonials[currentTestimonialIndex + 1]]?.author}</i>
        </div>
)}
  {testimonialContent[testimonials[currentTestimonialIndex + 2]] && (
        <div className={styles.body}>
          <strong className="block">{testimonialContent[testimonials[currentTestimonialIndex + 2]]?.name}</strong>
            <div class="star-container">
          <FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
</div>
<p className={styles.text2} title={testimonialContent[testimonials[currentTestimonialIndex + 2]]?.text}>
            {testimonialContent[testimonials[currentTestimonialIndex + 2]]?.text}
          </p>
          <i className={styles.text1}>{testimonialContent[testimonials[currentTestimonialIndex + 2]]?.author}</i>
        </div>
        )}
</div>


        <div className={styles.text}>
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial}
              className={styles['custom-button']}
              onClick={() => handleContentChange(index)}
            >
           
            </button>

          ))}

        </div>
      
    </div>
  );
}

export default ContentSwitcher;

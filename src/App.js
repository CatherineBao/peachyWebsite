import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion"


export default function App() {
  return (
    <div className='relative z-10 bg-pink flex items-center justify-center'>
      <div className='pt-24 text-black pt-16 md:pt-10 bg-light-pink p-10 md:w-1/2'>
        <div class="bg-pink mt-6 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
          <div class="p-6"> 
              <div class="flex flex-col items-center justify-center">
                  <div class="w-full flex flex-col justify-center lg:flex-row gap-24 items-center">
                      <motion.div
                      initial={{x:-30, opacity:0}}
                      whileInView={{
                        x:0,
                        opacity:1,
                        transition: {type:"spring",
                        duration:1, ease: 'easeOut'}
                        }}
                      className='-m-16 -ml-20 lg:-ml-44 max-w-1/2'>
                        <img className="shadow-xl rounded-full border-none" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSDxIVFRUXFxUbFRcYFx0VFRgXHR0aFxcYFxUYICggGh4lHRUXITEiJSkrLi4uFx8zODMtNygtLisBCgoKBwcHGgcHDisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAJRABAQADAAEDBAMBAQAAAAAAAPBhceERAcHRITGBkUGh8bFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDZqyAgXdAAXNhX1/sAu6AArJWQAKwABWQr6/fIBWAu6AKyAFZAArAeb3AKyFfX+wCsAAVkrIAvnQedAAlYALu1SsgLc0JWAFu7ErIC1hCsFYAWsoVkFS4Hi9tAqBWQAKwAqVgACsgLc0J4r+AC7tUrIC1hKwVgrAL5z6h+wErAAFzYV8gF3Qeb3ALmwAKwVgACsighd0FfABc2qV8gFYACsAoJc2ABd0ABc2FfIBWC7oAXxj1C+4CVkKyAXNBWAC7sKyAXNBWAC7srJWSsgFzQVgAu7CsgFzQVgAu7CsgVkKyAXNBWAC7sKyAXNBWAC7srJWSsgvjHoJ4x6AFZBQS7oFBLmwALugAKyAAeb30KCeS5tUAPN76VAC5sAAUE83voFBLmwUEu6AAubKyAHnPoL5ASsB61/wCAF3YVk9APF7aD4/H+AF3YVkAuaKwVgrABd2VkrIBc0FYALuwrIBWArAFYCsAF3YVkAuaCx/gBd2FZALmisFYKwC+c+ov7AcigIKAnmv4FAQUBBUAKyoCHm9/v9lQAubVACsABWAUEubAA83voUBBQEFAPG/2i+LyAlZCsgFfT7BWACvp9wrIBWArABWSslZKyAXNBWAC7sKyAXNBWACshWQKyABc0FYAKyFZAKwFYAKyVkrJWQPGPQPOfQAFQDze4VlQS59/7C4oJ5vcLuwAADyBd2AXPv91S5oArCpd2ACgiooIF3aglz7/cLignm9/uF3YACgec+gec/wBIB4r+CslYAKyFZAPF/H+Bd0AVkLmwCsFYKwAVkrIXNgFYC7oArIXNgFYC7oCsBd0AVkLmwCx/z7Bd0AVkKyAVgrBWCsAv59Q/HqAgKCBWFBArIAFzSggFZAFKwCFfAXdgFfKpc0ABWQArKglfIXNKCeRaygAXNKCAVkDxv9i+MegCVkAC/HwXwXdAF+fkvkubAL8fAXdAF+fkrJWQC+SsB5vfQBWQubAKwF3QBWQubArIXNgFYC7oArJfJc2AX4+Au6AL8/Jfn5LmwF+mA859AAQAr4VLu1BK+QuaAK+Au7UBCsFYABayAlfKpc0CpXwqXdgKhWAArAAFZUEr5VLmgCvhUu7AVCsFYBfN4Dzn1/QCVgrJdAKyFzYBY/wPN76AKyFzYBWCsF0ugVkrIXNgFYDze+gCshc2AVgLugKwVk83uAVkLmwCx/geb30AVkLmwCsFYLpdBf2HjHr+wFPT5AA9QA+T0AA4AAAHp8gAeq/yAJ6AAAACgIACp6AAcAAAEAB//9k="/>
                      </motion.div>
                      <div className='text-center md:text-left'>
                        <h1 className="text-lg font-bold">About:</h1>
                        <h1 className='uppercase text-4xl font-light'>Teeth</h1>
                      </div>
                      <motion.div
                      initial={{x:-30, opacity:0}}
                      whileInView={{
                        x:0,
                        opacity:1,
                        transition: {type:"spring",
                        duration:1, ease: 'easeOut'}
                        }}>
                      <div className='-mt-10 mb-8 lg:mb-0 lg:-ml-10 flex gap-5 items-center justify-center'>
                        <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/512/49/49323.png"/>
                        <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/512/87/87390.png"/>
                        <img className="w-8 h-8" src="https://cdn.iconscout.com/icon/free/png-256/deviantart-2749252-2284642.png"/>
                      </div>
                      </motion.div>
                  </div>
                </div>
              <div class="hidden md:flex justify-center lg:justify-end mt-2">
                  <div class="border-y border-slate-200 mb-1 w-2/3 h-8"></div>
              </div>
              <div class="mt-6 text-center">
                  <div class="flex flex-wrap justify-center">
                      <div class="w-full p-4 pt-12 text-left">
                      <motion.div
                      initial={{x:-30, opacity:0}}
                      whileInView={{
                        x:0,
                        opacity:1,
                        transition: {type:"spring",
                        duration:1, ease: 'easeOut'}
                        }}>
                          <p class="leading-relaxed text-slate-600 mb-4">I am a nineteen year old queer artist located in the U.S.! I specialize in digital art, however I do love to paint with acrylics! I currently am employed full time at a daycare, so replies will come delayed from Monday-Friday. I'm in the central daylight time zone for context!</p>
                        </motion.div>
                        <motion.div
                      initial={{x:-30, opacity:0}}
                      whileInView={{
                        x:0,
                        opacity:1,
                        transition: {type:"spring",
                        duration:1, ease: 'easeOut'}
                        }}>
                          <img className="w-full rounded-lg my-10" src="https://wallpapers.com/images/featured/7sn5o1woonmklx1h.jpg"/>
                          </motion.div>
                          <motion.div
                      initial={{x:-30, opacity:0}}
                      whileInView={{
                        x:0,
                        opacity:1,
                        transition: {type:"spring",
                        duration:1, ease: 'easeOut'}
                        }}>
                          <p class="leading-relaxed text-slate-600 mb-4">When commissioning me, please include what style you want drawn (regular fullbody, chibi icon, etc), a refrence photo of the character(s), and any important information I may need to know within your first message. Feel free to email me at Sweetenedteeth@gmail.com or contact me on one of my socials down below!</p>
                        </motion.div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
}

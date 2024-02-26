import { TypeAnimation } from 'react-type-animation';
export default function Home(){
    return (
    <div className='PressStart'>
        <div className='Name'><h1>Hi, I'm Alex</h1></div>
        <span style={{fontSize: '4rem', display: 'inline-block'}}>
    {'{"'}
    <TypeAnimation
      sequence={[
        'Front-End',
        1000,
        'Back-End',
        1000,
        'Databases',
        1000,
        'Web Design',
        1000
      ]}
      wrapper='span'
      speed={25}
      repeat={Infinity}
    />
    {'"}'}
  </span>
    </div>
    );
};
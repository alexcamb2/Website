import { TypeAnimation } from 'react-type-animation';
export default function Home(){
    return (
    <div className='PressStart'>
        <div className='Name'><h1>I have experience in:</h1></div>
        <span style={{fontSize: '4rem', display: 'inline-block'}}>
    {'{"'}
    <TypeAnimation
      sequence={[
        'Python',
        1000,
        'MySQL',
        1000,
        'Java/Javascript',
        1000,
        'React',
        1000,
        'HTML/CSS',
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
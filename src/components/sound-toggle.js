// import React from "react"
// import styled, { keyframes } from "styled-components"

// import useSound from '@hooks/use-sound.hook';

// import UnstyledButton from '../UnstyledButton';
// import { ConfigContext } from '../ConfigContext';

// const wiggle = keyframes`
//   0% {
//     transform: rotate(0deg)
//   }
//   25% {
//     transform: rotate(15deg)
//   }
//   50% {
//     transform: rotate(-13deg)
//   }
//   75% {
//     transform: rotate(12deg)
//   }
//   100% {
//     transform: rotate(0deg)
//   }
// `

// export const SoundToggle = ({
//   soundEnabled,
//   setSoundEnabled,
//   size = 22,
//   ...delegated
// }) => {
//   const [triggerWiggle, setTriggerWiggle] = React.useState(false)

//   const [playOn] = useSound("/sounds/enable-sound.mp3", { volume: 0.4 })
//   const [playOff] = useSound("/sounds/disable-sound.mp3", { volume: 0.5 })

//   return (
//     <IconWrapper
//     onClick={ev => {
//       ev.preventDefault();

//       setSoundEnabled(!soundEnabled);
//       setTriggerWiggle(!soundEnabled);

//       if (soundEnabled) {
//         playOff({ forceSoundEnabled: true });
//       } else {
//         playOn({ forceSoundEnabled: true });
//       }
//     }}
//     aria-label={soundEnabled ? 'Disable sounds' : 'Enable sounds'}
//     title={soundEnabled ? 'Disable sounds' : 'Enable sounds'}
//     {...delegated}
//     >
//       <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
//         <FilledPath
//           d="M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           shouldWiggle={triggerWiggle}
//         />
//         <Path
//           d={`
//             M14.3025 3.69751
//             C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001
//             C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025
//           `}
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           style={{
//             opacity: soundEnabled ? 1 : 0,
//             transitionDelay: soundEnabled ? "150ms" : "0ms",
//           }}
//         />
//         <Path
//           d={`
//             M11.655 6.34501
//             C12.358 7.04824 12.753 8.00189 12.753 8.99626
//             C12.753 9.99063 12.358 10.9443 11.655 11.6475
//           `}
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           style={{
//             opacity: soundEnabled ? 1 : 0,
//             transitionDelay: soundEnabled ? "0ms" : "150ms",
//           }}
//         />
//       </svg>
//     </IconWrapper>
//   )
// }

// const IconWrapper = styled(UnstyledButton)`
//   opacity: 0.7;
//   position: relative;
//   border-radius: 5px;
//   width: 40px;
//   height: 32px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media ${BREAKPOINTS.mdMin} {
//     &:hover {
//       opacity: 1;
//     }
//   }
// `

// const Path = styled.path`
//   stroke: var(--color-text);

//   @media (prefers-reduced-motion: no-preference) {
//     transition: opacity 200ms;
//   }
// `

// const FilledPath = styled(Path)`
//   fill: var(--color-text);
//   transform-origin: 30% center;

//   @media (prefers-reduced-motion: no-preference) {
//     animation: ${(p) => (p.shouldWiggle ? wiggle : null)} 350ms;
//   }
// `

// const SoundToggleContainer = (delegated) => {
//   const { soundEnabled, setSoundEnabled } = React.useContext(ConfigContext)

//   return (
//     <SoundToggle
//       soundEnabled={soundEnabled}
//       setSoundEnabled={setSoundEnabled}
//       {...delegated}
//     />
//   )
// }

// export default SoundToggleContainer

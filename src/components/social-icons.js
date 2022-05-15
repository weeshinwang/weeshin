import React from "react"
import styled from "styled-components/macro"
import { Link } from "gatsby"

export default function SocialIcons() {
  return (
    <>
      <IconWrapper>
        <a href="https://github.com/weeshinwang">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              transform="scale(64)"
              d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
            />
          </svg>
        </a>
      </IconWrapper>

      <IconWrapper>
        <a href="https://gitee.com/weeshin">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <defs />
            <path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512zm259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6V608c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6V480c0-12.8-12.8-25.6-25.6-25.6z" />
          </svg>
        </a>
      </IconWrapper>

      <IconWrapper>
        <Link to="/wechat">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enableBackground="new 0 0 1000 1000"
          >
            <g>
              <path d="M564.7,499.6c-11.2,0-22.4,10.4-22.4,23.2c0,10.4,11.2,20.8,22.4,20.8c16.8,0,28.7-10.4,28.7-20.8C593.4,510,581.4,499.6,564.7,499.6z" />
              <path d="M491.2,391.8c17.6,0,28.7-11.2,28.7-27.9c0-17.6-11.2-27.9-28.7-27.9c-16.8,0-32.7,10.4-32.7,27.9C458.5,380.6,474.5,391.8,491.2,391.8z" />
              <path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M407.4,624.1c-29.5,0-51.1-4.8-79-12.8l-80.6,40.7l23.2-68.7c-56.7-39.9-90.2-90.2-90.2-151.7c0-108.6,102.2-191.6,226.7-191.6c110.2,0,208.4,65.5,227.5,158.1c-8-1.6-15.2-2.4-21.6-2.4c-108.6,0-192.4,81.4-192.4,179.6c0,16.8,2.4,31.9,6.4,47.9C421,624.1,413.8,624.1,407.4,624.1z M740.3,702.4l16,57.5l-60.7-34.3c-23.2,4.8-45.5,12-68.7,12c-107,0-191.6-73.4-191.6-164.5c0-91,84.6-164.5,191.6-164.5c101.4,0,192.4,73.4,192.4,164.5C819.3,624.1,785,669.6,740.3,702.4z" />
              <path d="M333.1,335.9c-16.8,0-34.3,10.4-34.3,27.9c0,16.8,17.6,27.9,34.3,27.9c16,0,28.7-11.2,28.7-27.9C361.9,346.3,349.1,335.9,333.1,335.9z" />
              <path d="M690,499.6c-12,0-22.4,10.4-22.4,23.2c0,10.4,10.4,20.8,22.4,20.8c16,0,27.9-10.4,27.9-20.8C717.9,510,706,499.6,690,499.6z" />
            </g>
          </svg>
        </Link>
      </IconWrapper>
      <IconWrapper>
        <a href="mailto:weeshin@foxmail.com">
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 16C238.064 16 16 238.064 16 512s222.064 496 496 496 496-222.064 496-496S785.936 16 512 16zM307.488 346.672l409.008 0c5.184 0 10.064 1.232 14.464 3.296l-196.688 138.064c-17.104 17.12-27.696 17.12-44.8 0l-196.608-137.984C297.328 347.936 302.24 346.672 307.488 346.672zM750.816 652.192c0 18.96-15.36 34.336-34.304 34.336L307.488 686.528c-18.944 0-34.304-15.376-34.304-34.336L273.184 391.296c0-1.728 0.256-3.376 0.512-5.024l201.92 143.312c20.096 20.112 52.688 20.112 72.784 0l201.92-143.312c0.24 1.648 0.512 3.296 0.512 5.024L750.832 652.192z" />
          </svg>
        </a>
      </IconWrapper>
    </>
  )
}

const IconWrapper = styled.div`
  width: 1.8rem;
  display: inline-block;
  margin: 0 5px;

  & svg {
    width: 100%;
    height: auto;

    & path {
      fill: ${({ hover }) => hover || `var(--color-text)`};
    }

    &:hover path {
      fill: ${({ hover }) => hover || `var(--color-hover-bg)`};
    }

    transition: 300ms;
  }
`

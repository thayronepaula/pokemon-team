interface VetorProps {
  fillColor?: string
}
const VetorDown = ({ fillColor }: VetorProps) => {
  return (
    <svg
      width="69"
      height="32"
      viewBox="0 0 69 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2293 0.327123C14.3347 0.327123 17.4401 0.389321 20.5411 0.296025C21.754 0.260483 22.3182 0.615898 22.7624 1.78876C24.8327 7.23993 29.422 10.4298 34.9265 10.4076C40.4132 10.3853 45.1313 7.11109 47.095 1.75322C47.5081 0.624786 47.988 0.296027 49.1164 0.304912C55.0296 0.353781 60.9428 0.367108 66.8515 0.296025C68.2599 0.278254 68.5931 0.620342 68.3754 2.05088C65.7897 19.2174 51.8042 31.608 34.58 31.9234C17.951 32.2255 3.48124 20.1814 0.313616 3.39701C-0.263932 0.327125 -0.263931 0.327123 2.80596 0.327123C5.60928 0.322681 8.4215 0.327123 11.2293 0.327123Z"
        fill={fillColor || '#fff'}
      />
    </svg>
  )
}

export default VetorDown

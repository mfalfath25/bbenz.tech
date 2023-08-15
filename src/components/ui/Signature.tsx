'use client'

import { motion } from 'framer-motion'

export const Signature = () => {
  const transition = { duration: 1.5, yoyo: Infinity, ease: 'easeInOut' }
  return (
    <div className='max-h-sm max-w-sm'>
      <svg
        width='100'
        height='50'
        viewBox='0 0 282 92'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          d='M1 80.1359C10.6923 64 18.1825 54.7268 43 37C57 27 73.1466 18.9286 93.0769 14.5C100.077 12.9446 114.363 10.6649 126.462 12.9446C134 14.365 137.755 18.134 138.889 19.3449C140.668 21.2446 142.448 23.6192 142.892 27.8936C143.335 32.1418 142.003 39.7668 139.334 46.4158C134.759 57.8142 130.883 64.9381 127.769 69.6874C121.118 79.8333 109.435 93.5705 111.756 90.5843C114.077 87.5982 126.077 76.5909 131.772 72.537C137.11 68.7375 146.896 62.0885 153.568 58.764L161.129 54.9646L168.246 52.115C171.36 51.1651 173.623 51.0208 175.363 51.6401C176.698 52.115 178.666 54.4283 177.587 60.1888C176.698 64.9381 175.363 71.1122 175.808 71.5871C176.253 72.0621 178.032 71.5871 178.032 71.5871C178.032 71.5871 183.814 69.6874 185.149 69.2125C186.483 68.7375 187.041 68.8585 187.373 69.2125C187.818 69.6874 187.818 73.9618 188.262 74.4367C188.707 74.9116 189.152 74.9116 190.042 74.9116C190.931 74.9116 191.821 74.9116 194.935 74.4367C198.048 73.9618 199.827 73.9618 200.272 74.4367C200.717 74.9116 201.162 75.3866 200.717 78.7111C200.272 82.0356 199.827 82.9854 200.717 81.5606C201.607 80.1359 197.603 87.2598 205.61 73.9618C213.616 60.6637 222.957 41.1916 227.405 32.168C231.853 23.1443 240.749 6.52175 242.529 4.1471C244.308 1.77246 245.642 0.347666 246.532 1.29753C247.421 2.24738 247.866 6.04682 247.421 11.271C246.977 16.4953 246.532 22.1944 243.863 35.4925C241.194 48.7905 237.636 63.9883 237.191 67.3128C236.746 70.6373 236.301 73.4868 237.191 71.1122C238.081 68.7375 238.97 65.413 239.415 62.5635C239.86 59.7139 239.86 59.239 238.081 56.8643C236.301 54.4897 232.743 53.5398 232.743 53.5398C232.743 53.5398 228.74 52.115 224.736 52.115C220.733 52.115 194.49 52.5899 195.824 51.6401C197.159 50.6902 198.938 50.2153 209.613 48.3156C220.288 46.4158 278.113 38.817 280.782 38.817C283.451 38.817 260.766 44.0412 260.766 44.0412'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </svg>
    </div>
  )
}

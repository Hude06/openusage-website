const React = require('react')
const motion = new Proxy({}, {
  get: (_, tag) => React.forwardRef(({ children, ...props }, ref) => {
    const filtered = Object.fromEntries(
      Object.entries(props).filter(([k]) => !['initial','animate','whileInView','whileHover','viewport','transition'].includes(k))
    )
    return React.createElement(tag, { ...filtered, ref }, children)
  })
})
module.exports = { motion, AnimatePresence: ({ children }) => children }

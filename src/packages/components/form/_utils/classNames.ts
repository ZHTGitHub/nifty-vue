function classNames(...args: any[]) {
  const classes = []

  for(let i = 0; i < args.length; i++) {
    const value = args[i]

    if(!value) continue

    classes.push(value)
  }

  return classes.join(' ')
}

export default classNames
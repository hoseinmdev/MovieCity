const createConditionalClass = (
    classes: string,
    conditionalClasses: { [key: string]: unknown }
  ) => {
    const truthyConditionalClasses = Object.entries(conditionalClasses)
      .map(([key, value]) => (value ? key : ""))
      .join(" ");
    return `${classes.trim()} ${truthyConditionalClasses.trim()}`;
  };
  
  export default createConditionalClass;
  
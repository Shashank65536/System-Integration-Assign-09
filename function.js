function main(args) {
    let keyword = args.keyword || 'Hello - world'
    let greeting = 'Shashank Bidwai says ' + keyword;
    console.log(greeting)
    return {"body": greeting}
  }
    
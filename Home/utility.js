//truncate
export function truncate(text, max) {
    let content = "";
  
    let contentArray = text.split(" ");
  
    if (contentArray.length <= max) {
       content = text;
    } else {
      for (let i = 0; i < max; i++) {
        content += contentArray[i] + " ";
      }

      content += "..."
    }
  
    return content;
  }
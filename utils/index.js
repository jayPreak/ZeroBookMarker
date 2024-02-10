import * as FileSystem from 'expo-file-system'

export const checkImageURL = url => {
  if (!url) return false
  else {
    const pattern = new RegExp(
      '^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$',
      'i'
    )
    return pattern.test(url)
  }
}

export const createFile = async () => {
  try {
    const fileUri = FileSystem.documentDirectory + 'bookmark.txt'
    const fileInfo = await FileSystem.getInfoAsync(fileUri)

    if (!fileInfo.exists) {
      // Create the file if it doesn't exist
      await FileSystem.writeAsStringAsync(fileUri, '')
      console.log('File created successfully')
    } else {
      console.log('File already exists')
    }
  } catch (error) {
    console.error('Error creating file:', error)
  }
}

export const readFile = async () => {
  try {
    const fileUri = FileSystem.documentDirectory + 'bookmark.txt'
    const fileInfo = await FileSystem.getInfoAsync(fileUri)

    if (fileInfo.exists) {
      const fileContents = await FileSystem.readAsStringAsync(fileUri)
      const contentArray = fileContents.split(',')

      // Create an array to hold the final objects
      const dataArray = []

      // Iterate over the content array in pairs
      for (let i = 0; i < contentArray.length; i += 2) {
        // Check if there are enough elements to create an object
        if (i + 1 < contentArray.length) {
          // Create an object with the current string and the next number
          const obj = {
            name: contentArray[i].trim(), // Trim extra spaces
            value: parseInt(contentArray[i + 1].trim()) // Parse integer from string and trim extra spaces
          }
          // Push the object to the dataArray
          dataArray.push(obj)
        }
      }

      console.log('Data Array:', dataArray)
      return dataArray
    } else {
      console.log('File does not exist')
    }
  } catch (error) {
    console.error('Error reading file:', error)
  }
}

export const writeFile = async content => {
  try {
    const fileUri = FileSystem.documentDirectory + 'bookmark.txt'
    console.log('Writing to file:', content)

    let existingContent = ''
    try {
      existingContent = await FileSystem.readAsStringAsync(fileUri)
      console.log('Existing file contents:', existingContent)
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.error('Error reading from file:', readError)
      }
    }
    const updatedContent = existingContent
      ? `${existingContent},${content}`
      : content

    await FileSystem.writeAsStringAsync(fileUri, updatedContent)
    console.log('Content written to file successfully')
  } catch (error) {
    console.error('Error writing to file:', error)
  }
}

export const deleteFileContents = async () => {
  try {
    const fileUri = FileSystem.documentDirectory + 'bookmark.txt'

    // Write an empty string to the file to delete its contents
    await FileSystem.writeAsStringAsync(fileUri, '')
    console.log('File contents deleted successfully')
  } catch (error) {
    console.error('Error deleting file contents:', error)
  }
}

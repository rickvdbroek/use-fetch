![Release](https://github.com/rickvdbroek/use-fetch/workflows/Release/badge.svg?branch=master)

# use-fetch-api
A custom React hook for fetching data using the Fetch API.

## Getting started
To use this hook simply run the following command: `npm install use-fetch-api`. After installing the package you can start using it in your project like so:

```
import { useFetch } from 'use-fetch-api';

const App = () => {
    const { data, loading, error } = useFetch('https://www.your-url.com', 'json');

    if (loading) {
      return <span>Loading...</span>;
    }

    if (error) {
      console.log(error);
    }
    
    return (
      <div>
        {data ? data.map(x => <div>{x.title}</div>) : null}
      </div>
    );
}

export default App;
```

## API
The hooks receives three arguments of which two are required, these areguments are `url`, `resolver`, `options`.

- **url: string**
The API endpoint you're trying to get data from
- **resolver (optional): 'array' | 'Buffer' | 'blob' | 'formData' | 'json' | 'text'**
The way in which you want your data to be resolved, most often this will be `json`.
- **options (optional): RequestInit**
The options that are used in the regular [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

## Contributing and issues
Are you using this hook and stumble upon an issue please do tell, then we can make sure we fix it. You can do this by starting an issue on [Github](https://github.com/rickvdbroek/use-fetch/issues) If you'd like to contribute, awesome! Just start by creating a pull request.

# Bible API

A simple Bible API based on [Bible API](https://docs.api.bible/)
build using [NestJs](https://nestjs.com/) and host using [render](https://render.com/)

## Installation

Clone this repo and install this project with pnpm

```bash
  cd my-project
  pnpm i
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`BASE_URL` : https://api.scripture.api.bible/v1

`API_KEY` : YOUR_API_KEY

`REDIS_URL` : YOUR_REDIS_URL

`REDIS_CACHE_TTL` : 3600


## Demo

[Demo](https://bible-api.onrender.com/)


## API Reference

#### Get all available bible version

```http
  GET /bible
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Bible name search |

#### Get bible detail

```http
  GET /bible/${bibleId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bibleId`      | `string` | **Required**. Id of bible version |


#### Get all books on selected bible

```http
  GET /bible/${bibleId}/books
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bibleId`      | `string` | **Required**. Id of bible version |

#### Get books detail

```http
  GET /bible/${bibleId}/books/${booksId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bibleId`      | `string` | **Required**. Id of bible version |
| `booksId`      | `string` | **Required**. Id of selected books |

#### Get all chapters on books

```http
  GET /bible/${bibleId}/books/${booksId}/chapters
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bibleId`      | `string` | **Required**. Id of bible version |
| `booksId`      | `string` | **Required**. Id of selected books |

#### Get chapter detail

```http
  GET /bible/${bibleId}/chapters/${chapterId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bibleId`      | `string` | **Required**. Id of bible version |
| `chapterId`      | `string` | **Required**. Id of selected chapter |

#### Get verses list on chapters

```http
  GET /bible/${bibleId}/chapters/${chapterId}/verses
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bibleId`      | `string` | **Required**. Id of bible version |
| `chapterId`      | `string` | **Required**. Id of selected chapter |

#### Search on entire bible

```http
  GET /bible/${bibleId}/search
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | **Required**. query string of the search content |



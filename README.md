## React Form Component

### Installation

`npm install --save ja-form`

### How To Use

First import this component where you want to use it

`import Form from "ja-form"`

Then just use it

```
<Form action={post}>
{({}) => (
   <>
    <input type="email" name="email/>
    <input name="name"/>
   <> 
)}
</Form>
```

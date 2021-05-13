import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
let books = ["Moby Dick", "Life of Pi", "Sapiens", "Sapiens", "Sapiens"];
let count = 0;

for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
  if (books[i] === "Sapiens") {
    count = count + 1;
    console.log(count);
  }
}

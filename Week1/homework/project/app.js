'use strict'

const quotes = [{
        quote: 'Success is not final; failure is not fatal: It is the courage to continue that counts.',
        author: 'Winston S. Churchill'
    },
    {
        quote: 'Success usually comes to those who are too busy to be looking for it.',
        author: 'Henry David Thoreau'
    },
    {
        quote: 'The way to get started is to quit talking and begin doing.',
        author: 'Walt Disney'
    },
    {
        quote: 'If you really look closely, most overnight successes took a long time.',
        author: 'Steve Jobs'
    },
    {
        quote: 'The secret of success is to do the common thing uncommonly well.',
        author: 'John D. Rockefeller Jr.'
    },
    {
        quote: 'I find that the harder I work, the more luck I seem to have.',
        author: 'Thomas Jefferson'
    },
    {
        quote: 'The real test is not whether you avoid this failure, because you won\'t. It\'s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.',
        author: 'Barack Obama'
    }
];
const frame = document.querySelector('#frame');
const btnCall = document.querySelector('#btnCall');
const btnNew = document.querySelector('#btnNew');
const parag1 = document.querySelector('.quote');
const parag2 = document.querySelector('.author');
const textBox = document.getElementById('text');
const mainDiv = document.getElementById('main')
const newQuote = document.getElementById('new1')
const newAuthor = document.getElementById('new2')

btnCall.addEventListener('click', randomItem);

function randomItem() {
    let rng = Math.floor(Math.random() * quotes.length);
    let randomquote = quotes[rng].quote
    let randomAuthor = quotes[rng].author;
    parag1.innerHTML = '<i class="fas fa-quote-left"></i> ' + randomquote;
    parag2.innerHTML = '- ' + randomAuthor;
    document.querySelector('#quotes').style.display = 'block';
    btnNew.style.display = 'inline-block';
    textBox.style.display = 'flex';
    mainDiv.style.height = '40rem';
};

btnNew.addEventListener('click', addQuote);

function addQuote() {  // this is extra thing. just made a practice. in this func. 
    if (newQuote.value.length === 0 || newAuthor.value.length === 0) { //user typing a new quote and it`s author name. And when clcked on add button getting some alerts and adding new quotes to array. 
        alert('Quote and Author can`t be empty')
    } else {
        quotes.push({
            quote: `${newQuote.value}`,
            author: `${newAuthor.value}`
        });
        alert('new quote added');
    }
}
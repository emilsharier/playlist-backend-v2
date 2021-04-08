const Analyser = require("natural").SentimentAnalyzer;
const stemmer = require("natural").PorterStemmer;

const natural = require("natural");

const { errorLog } = require("../../common/messages");

exports.analyseText = (text) => {
  try {
    // let arr = text.split(" ");
    let tokenizer = new natural.WordTokenizer();
    let arr = tokenizer.tokenize(text);

    console.log("Tokenized text");
    console.log(arr);

    const analyser = new Analyser("English", stemmer, "afinn");

    const result = analyser.getSentiment(arr);

    return result;
  } catch (ex) {
    errorLog(ex);
  }
};

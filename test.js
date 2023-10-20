//blah blah
//blah blah 2
const NODE_VERSION = '12';

// if we disable the formatter and do some changes which is different of the formatter rules in .prettierrc.js
const inconsistentFormatting = 'Hey there';
// and then try to commit it ideally husky should fix those formatting issue and then it should go to commit
// now after the commit we should we 'Hey there' in the file i.e with single quotes

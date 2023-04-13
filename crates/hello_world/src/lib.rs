pub struct Word {
    pub word: String,
    pub count: u32,
}

impl Word {
    pub fn new(word: String) -> Self {
        Word { word, count: 1 }
    }
}

mod tests {
    use super::*;

    #[test]
    fn test_new() {
        let word = Word::new("hello".to_string());
        assert_eq!(word.word, "hello");
        assert_eq!(word.count, 1);
    }
}

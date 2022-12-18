<template>
    <div>
        <QuizView :question="question.sentence" :selections="question.selections" :answer="question.answer"
            :explain="question.explain"></QuizView>
        <ExplainView></ExplainView>
    </div>
    <button @click="nextPage">次へ</button>
</template>
  
<script>
import QuizView from '@/components/QuizView.vue';
export default {
    components: {
        QuizView
    },
    data() {
        return {
            quiz: [{
                sentence: "日本酒の主な材料はなんでしょうか？",
                selections: ["お米", "ブドウ", "小麦"],
                answer: 1,
                explain: {
                    star_num: 1,
                    ans: "お米",
                    details: "日本酒は、米と麹（こうじ）と水が材料となっています。"
                }
            },
            {
                sentence: "洋酒の主な材料はなんでしょうか？",
                selections: ["お米", "ブドウ", "小麦"],
                answer: 1,
                explain: {
                    star_num: 1,
                    ans: "お米",
                    details: "日本酒は、米と麹（こうじ）と水が材料となっています。"
                }
            }
            ],
            question_number: 0,
        }
    },
    methods: {
        nextPage() {
            if (this.question_number < this.quiz.length - 1) {
                this.question_number += 1
            } else {
                this.question_number = 0
            }
        }
    },
    computed: {
        question() {
            return this.quiz[this.question_number]
        }
    }
}
</script>
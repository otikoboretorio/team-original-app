<template>
    <h1>{{ question.sentence }}</h1>
    <div v-for="( selection, index) in question.selections" v-bind:key="selection">
        <button @click="show">
            <div>
                {{ index }}.{{ selection }}
            </div>
        </button>
    </div>
    <div v-if="isshow">
        <ExplainView :star_num="question.explain.star_num" :ans="question.explain.ans"
            :details="question.explain.details"></ExplainView>
    </div>
    <button @click="nextPage" :disabled="!isshow">次へ</button>
</template>

<script>
import ExplainView from '@/components/ExplainView.vue';

export default {
    // props: ["question", "selections", "answer", "explain"],
    components: {
        ExplainView
    },
    data() {
        return {
            isshow: false,
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
        show() {
            this.isshow = true
        },
        notshow() {
            this.isshow = false
        },
        nextPage() {
            this.notshow()
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
<template>
    <h1>{{ question.sentence }}</h1>
    <div v-for="( selection, index) in question.selections" v-bind:key="selection">
        <button @click="addPoint(index)">
            <div>
                {{ index + 1 }}.{{ selection }}
            </div>
        </button>
    </div>
    <div v-if="isshow">
        <ExplainView :star_num="question.explain.star_num" :ans="question.explain.ans"
            :details="question.explain.details"></ExplainView>
    </div>
    <button @click="nextPage" :disabled="!isshow">次へ</button>
    <div v-if="showResult">
        得点は{{ points }}点！！
    </div>
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
            showResult: false,
            isshow: false,
            points: 0,
            quiz: [
                {
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
                    sentence: "有名なワイン「ボージョレ・ヌーボー」を作っている国はどこでしょうか？",
                    selections: ["アメリカ", "フランス", "イタリア"],
                    answer: 2,
                    explain: {
                        star_num: 2,
                        ans: "フランス",
                        details: "日本酒は、米と麹（こうじ）と水が材料となっています。"
                    }
                },
                {
                    sentence: "黒ビール、色が黒いのはなぜ？",
                    selections: ["使用する水の違い", "麦芽の色", "着色料を使っている"],
                    answer: 2,
                    explain: {
                        star_num: 3,
                        ans: "麦芽の色",
                        details: "日本酒は、米と麹（こうじ）と水が材料となっています。"
                    }
                },
                {
                    sentence: "日本で言われる世界第５ウィスキーは日本、アメリカ、スコットランド、アイルランド、残る一つは？",
                    selections: ["フランス", "ドイツ", "カナダ"],
                    answer: 3,
                    explain: {
                        star_num: 4,
                        ans: "カナダ",
                        details: "日本酒は、米と麹（こうじ）と水が材料となっています。"
                    }
                },
                {
                    sentence: "ワインに果物を入れたドリンクの名前は？",
                    selections: ["ブルゴーニュ", "コンポ", "サングリア"],
                    answer: 3,
                    explain: {
                        star_num: 5,
                        ans: "サングリア",
                        details: "日本酒は、米と麹（こうじ）と水が材料となっています。"
                    }
                },
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
                this.showResult = true
            }
        },
        addPoint(n) {
            this.show()
            if (n + 1 === this.question.answer) {
                this.points += this.question.explain.star_num
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
<template>
    <h1>{{ question }}</h1>
    <div v-for="( selection, index) in selections" v-bind:key="selection">
        <button @click="show">
            <div>
                {{ index }}.{{ selection }}
            </div>
        </button>
    </div>
    <div v-if="isshow">
        <ExplainView :star_num="explain.star_num" :ans="explain.ans" :details="explain.details"></ExplainView>
    </div>
</template>

<script>
import ExplainView from '@/components/ExplainView.vue';

export default {
    props: ["question", "selections", "answer", "explain"],
    components: {
        ExplainView
    },
    data() {
        return {
            isshow: false
        }
    },
    methods: {
        show() {
            this.isshow = true
        },
        notshow() {
            this.isshow = false
        }
    },
    created() {
        console.log(this.explain.star_num)
    },
}
</script>
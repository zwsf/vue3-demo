/*
 * @Author: your name
 * @Date: 2020-06-05 14:43:17
 * @LastEditTime: 2020-06-05 16:00:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taxf:\vue3-demo\src\components\Test1.js
 */

import { reactive, onMounted, onUnmounted } from "vue";

export default function usePosition() {
    const position = reactive({x: 0, y: 0})

    function handler(ev) {
        console.log('鼠标滑动')
        position.x = ev.clientX
        position.y = ev.clientY
    }

    onMounted(() => {
        document.addEventListener('mousemove', handler, false)
    })

    onUnmounted(() => {
        document.removeEventListener('mousemove', handler, false)
    })

    return position
}
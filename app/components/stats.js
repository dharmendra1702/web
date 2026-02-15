"use client";

import { useEffect, useRef } from "react";

export default function Stats() {
  const ref = useRef(null);

  useEffect(() => {
    const nums = ref.current.querySelectorAll(".num");

    nums.forEach(el => {
      let current = 0;
      const target = +el.dataset.value;

      const animate = () => {
        current += target / 40;
        if (current < target) {
          el.innerText = Math.floor(current);
          requestAnimationFrame(animate);
        } else {
          el.innerText = target;
        }
      };

      animate();
    });
  }, []);

  return (
    <section
      ref={ref}
      className="text-center py-10 px-4 md:px-6 overflow-hidden"
    >
      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">

        <div>
          <h3 className="text-4xl font-bold text-purple-400">
            <span className="num" data-value="25">0</span>+
          </h3>
          <p className="text-gray-400 mt-2">Websites Built</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-400">
            <span className="num" data-value="100">0</span>%
          </h3>
          <p className="text-gray-400 mt-2">Client Satisfaction</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-orange-400">
            Fast
          </h3>
          <p className="text-gray-400 mt-2">Delivery Time</p>
        </div>

      </div>
    </section>
  );
}

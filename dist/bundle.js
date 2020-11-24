(()=>{"use strict";(new(function(){function t(){this.app=this.getElement("#root")}return t.prototype.getElement=function(t){return document.querySelector(t)},t.prototype.render=function(){this.app.innerHTML+='\n        <main>\n        <h1>Todo list</h1>\n        <form>\n          <div class="form-group">\n            <input type="text" id="form-input" />\n          </div>\n          <div class="form-button-group">\n            <button type="submit">Add todo</button>\n            <button type="submit">Edit todo</button>\n            <button type="submit">Delete todo todo</button>\n          </div>\n        </form>\n        <ul id="todo-list"></ul>\n      </main>\n      '},t}())).render()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2hvb2wtZGF0YS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zY2hvb2wtZGF0YS8uL3NyYy9wYXR0ZXJucy9tdmMvdmlld3MvdG9kby12aWV3LnRzIl0sIm5hbWVzIjpbInRoaXMiLCJhcHAiLCJnZXRFbGVtZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW5kZXIiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJvQkFPbUIsSUNQbkIsV0FHRSxhQUNFQSxLQUFLQyxJQUFNRCxLQUFLRSxXQUFXLFNBMEIvQixPQXZCRSxZQUFBQSxXQUFBLFNBQVdDLEdBRVQsT0FEZ0JDLFNBQVNDLGNBQWNGLElBSXpDLFlBQUFHLE9BQUEsV0FDRU4sS0FBS0MsSUFBSU0sV0FBYSx3ZEFpQjFCLEVBOUJBLEtEUVdELFUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9kb1ZpZXcgfSBmcm9tIFwiLi9wYXR0ZXJucy9tdmMvdmlld3MvdG9kby12aWV3XCJcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZTogc3RyaW5nKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKVxufVxuXG47KCgpID0+IHtcbiAgY29uc3QgdG9kb1ZpZXcgPSBuZXcgVG9kb1ZpZXcoKVxuICB0b2RvVmlldy5yZW5kZXIoKVxufSkoKVxuIiwiZXhwb3J0IGNsYXNzIFRvZG9WaWV3IHtcbiAgYXBwOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXBwID0gdGhpcy5nZXRFbGVtZW50KFwiI3Jvb3RcIikgYXMgSFRNTERpdkVsZW1lbnRcbiAgfVxuXG4gIGdldEVsZW1lbnQoc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5hcHAuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPG1haW4+XG4gICAgICAgIDxoMT5Ub2RvIGxpc3Q8L2gxPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmb3JtLWlucHV0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1idXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCB0b2RvPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FZGl0IHRvZG88L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkRlbGV0ZSB0b2RvIHRvZG88L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8dWwgaWQ9XCJ0b2RvLWxpc3RcIj48L3VsPlxuICAgICAgPC9tYWluPlxuICAgICAgYFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
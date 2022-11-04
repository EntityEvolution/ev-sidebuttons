const DebugMode = () => !window.invokeNative;

window.addEventListener('load', () => {
  const keys = new KeyElement();
  if (DebugMode()) {
    console.log('Debug mode');
    keys.add(1, {
      key: 'e',
      text: 'Open Door'
    });
    keys.add(2, {
      key: 'e',
      text: 'Open Door'
    });
    keys.add(3, {
      key: 'e',
      text: 'Open Door'
    });
    keys.add(4, {
      key: 'e',
      text: 'Open Door'
    });
    keys.add(5, {
      key: 'e',
      text: 'Open Door'
    });
    keys.edit(5, {
      key: 'a',
      text: 'Test'
    })
  }

  window.addEventListener('message', (e) => {
    const load = e.data;
    switch (load.action) {
      case 'add':
        keys.add(load.id, load.data);
        break;
      case 'remove':
        keys.remove(load.id);
        break;
      case 'edit':
        keys.edit(load.id, load.data);
        break;
    }
  })
})

class KeyElement {
  keys = null;
  container = null;
  constructor() {
    this.keys = new Map()
    this.container = document.querySelector('.container');
  }

  add(id, data) {
    const formatId = this.formatId(id);
    if (this.check(formatId)) {
      console.log(`Key "${formatId}" already exists`);
      return;
    }
    if (!data?.key || !data?.text) {
      console.log(`Key "${formatId}" data is invalid`);
      return;
    }
    const div = document.createElement('div');
    const span = document.createElement('span');
    const span2 = document.createElement('span');
    div.id = formatId;
    div.classList.add('ui-container');
    span.classList.add('ui-key');
    span2.classList.add('ui-text');
    span.textContent = data.key.toUpperCase();
    span2.textContent = data.text;
    div.appendChild(span2);
    div.appendChild(span);
    this.container.appendChild(div);
    this.keys.set(formatId, div);
  }

  remove(id) {
    const formatId = this.formatId(id);
    if (this.check(formatId)) {
      this.container.removeChild(this.keys.get(formatId));
      this.keys.delete(formatId);
    } else {
      console.log(`Key "${formatId}" not found`);
    }
  }

  edit(id, data) {
    const formatId = this.formatId(id);
    if (this.check(formatId)) {
      const key = this.keys.get(formatId);
      (data.key !== undefined) ? key.querySelector('.ui-key').textContent = data.key.toUpperCase() : null;
      (data.text !== undefined) ? key.querySelector('.ui-text').textContent = data.text : null;
    } else {
      console.log(`Key "${formatId}" not found`);
    }
  }

  check(id) {
    return this.keys.has(id.toLowerCase());
  }

  formatId(id) {
    return id.toString().toLowerCase();
  }
}
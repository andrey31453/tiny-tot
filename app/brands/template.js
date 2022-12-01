{
	const brands = document.getElementsByClassName('js__brands')[0]
	if (brands) {
		const links = brands.getElementsByClassName('js__link')
		const items = brands.getElementsByClassName('js__item')

		// получение папки с логотипами в зависимости от расширения окна
		const get_lofo_folder = () => {
			let folder
			const window_size = document.documentElement.clientWidth
			window_size > 768 ? (folder = 'logo') : (folder = 'logo-mobile')
			return folder
		}

		const set_img_style = (elem) => {
			const width = elem.clientWidth
			const height = elem.clientHeight
			if (width == 0 || height == 0)
				setTimeout(() => {
					set_img_style(elem)
				}, 100)
			elem.style.top = `calc(50% - ${height / 2}px)`
			elem.style.left = `calc(50% - ${width / 2}px)`
		}

		// добавление img с лого в js__link
		const add_imgs = () => {
			const folder = get_lofo_folder()

			;[...items].forEach((item) => {
				const name = item.dataset.name

				const static = document.createElement('img')
				static.classList.add('brands__item-logo')
				static.classList.add('__bi')
				static.src = `images/brands/${folder}/${name}.png`
				item.appendChild(static)

				set_img_style(static)
			})
		}

		// смена лого в js__link при ресаизе
		const change_imgs = () => {
			const folder = get_lofo_folder()

			;[...items].forEach((item) => {
				const name = item.dataset.name
				const img = item.getElementsByClassName(
					'brands__item-logo'
				)[0]
				img.src = `images/brands/${folder}/${name}.png`

				set_img_style(img)
			})
		}

		// добавление элементов в js__link
		const add_elements_to_link = () => {
			;[...links].forEach((link) => {
				const name = link.dataset.name
				link.classList.add(`__${name}`)

				const hover = document.createElement('div')
				hover.classList.add('brands__item__hover-bg')
				link.appendChild(hover)
			})
		}
		// добавление элементов в js__item
		const add_elements_to_item = () => {
			;[...items].forEach((item) => {
				const about = document.createElement('div')
				about.classList.add('brands__item__about')
				about.innerHTML = `<span class="__f __fc"><span class="brands__links">О бренде</span></span>`
				item.appendChild(about)
			})
		}

		// add content in js__link
		add_elements_to_link()
		add_elements_to_item()
		add_imgs()

		// функция переопределения логотипов в зависимости от размера экрана
		window.addEventListener('resize', change_imgs)
	}
}

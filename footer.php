<!-- Модальные окна -->
<div class="modals-sec">

	<div id="modal-order" class="modal">
		<p>Заказать обратный звонок</p>
		<p>Оставьте заявку и наш администратор свяжется с&nbsp;Вами в течение 10 минут</p>
		<form class="ajax-form">
			<input type="hidden" value="Новая заявка" name="form_subject">
			<input type="text" name="user_name" placeholder="Введите имя" data-label="Имя пользователя" class="input-text" >
			<input type="email" name="user_email" placeholder="Введите e-mail*" data-label="Email" class="input-text" data-req="true">
			<input type="tel" name="user_tel" placeholder="Введите телефон*" data-label="Телефон"  class="input-text" data-req="true">
			<input type="file" name="user_file" data-label="Файл">
			<button type="submit" class="btn">Отправить</button>
			<label class="style-check-ios">
				<input type="checkbox" name="user_policy" data-label="Согласен с условиями" value="yes" data-req="true" checked="">
				<span>Нажимая кнопку, я даю согласие на&nbsp;обработку персональных данных и&nbsp;соглашаюсь с&nbsp;<a href="#">условиями политики конфиденциальности</a></span>
			</label>
		</form>
	</div>

	<div id="modal-thanks" class="modal">
		<p>Спасибо за заявку!</p>
	</div>

	<div id="modal-error" class="modal">
		<p>Что-то пошло не так.</p>
		<p>Попробуйте еще раз.</p>
		<p>Если постоянно видите эту ошибку, пожалуйста, обратитесь к администратору сайта. Мы будем очень благодарны.</p>
	</div>

</div>
<!-- Модальные окна -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/assets.js" type="text/javascript" ></script>
<script src="js/main.js" type="text/javascript" ></script>

	</body>
</html>
